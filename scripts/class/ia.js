import { getDefeat, getWin } from "../elements/result.js";
import { campoClick, onRightClick } from "../gameController/gameEvents.js";
import { listaCamposLogicos } from "./campoLogico.js";


/* AGENTES EXTERNOS */ /////////////////////////////////////////////////////////////

export let listaCamposAbertos = []
export let listaCamposMarcados = []

export function resetListasIA() {
    listaCamposAbertos = []
    listaCamposMarcados = []
}

export async function playIA() {
    aberturaInicial()

    let win = false
    let defeat = false

    while(!win && !defeat){
    //Loop que resolve os campos, só para quando não tem nenhum campo que pode ser resolvido com lógica
    let condicao = true
    while (condicao) {
        await resolverCampos()
        await procuraCamposDeRisco()
        condicao = verificaLoop()
        await delay()
        console.log(condicao)
    }
        calculaMelhorProbabilidade()
        win = getWin()
        defeat = getDefeat()
    }
    console.log("Parou")
}



/* FUNÇÕES AUXILIARES */ /////////////////////////////////////////////////////////////////////////

//Gera um numero aleatorio para "chutar" uma abertura
function gerarNumRandom(max) {
    return Math.floor(Math.random() * max)
}

//Função define um delay para que o código não entre em loop infinito
function delay() {
    return new Promise(resolve => setTimeout(resolve, 200));
}

//Retorna os vizinhos fechados de um campo (incluindo os marcados, pois continuam não abertos)
function getVizinhosFechados(campo){
    return campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => 
        campoVizinho !== undefined 
        && !campoVizinho.estaAberto)
}

//Retorna os vizinhos marcados
function getVizinhosMarcados(campo){
    return campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => 
        campoVizinho !== undefined && 
        campoVizinho.estaMarcado)
}

//Retorna os vizinhos fechados, filtrando apenas os não marcados
function getVizinhosFechadosENaoMarcados(campo){
    return campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => 
        campoVizinho !== undefined && 
        !campoVizinho.estaAberto && 
        !campoVizinho.estaMarcado)
}



/* FUNÇÕES PRINCIPAIS */ ////////////////////////////////////////////////////////////////////////

function aberturaInicial() {
    const campoRandom = listaCamposLogicos[gerarNumRandom(listaCamposLogicos.length)]
    campoClick(campoRandom.posicaoX, campoRandom.posicaoY)
}

async function resolverCampos() {
    let camposComBomba = [] //Lista para adicionar campos que é certa a presença de bomba
    let camposSeguros = [] // Lista para adicionar campos que é certo a ausência de bomba

    //Filtra os campos abertos que possuem algum vizinho com bomba
    let listaCamposAbertosNaoZerados = listaCamposAbertos.filter(campo => campo.vizinhosBomba > 0)

    //Procura na lista de abertos, campos com bomba para marcar
    //Verifica se o número de campos adjacentes é igual ao número de bombas adjacentes
    listaCamposAbertosNaoZerados.forEach(campo => {
        if (campo.vizinhosBomba === getVizinhosFechados(campo).length && campo.vizinhosBomba !== getVizinhosMarcados(campo).length) {
            getVizinhosFechados(campo).forEach(vizinho => {
                //Aqui ele verifica se o campo em questão já não está na lista
                //Previne que o campo seja marcado e desmarcado
                const verificacao = camposComBomba.find(campoCertoComBomba => campoCertoComBomba.posicaoX === vizinho.posicaoX && campoCertoComBomba.posicaoY === vizinho.posicaoY)
                if (!verificacao) {
                    camposComBomba.push(vizinho)
                }
            })
        }
    })

    //Marca os campos que é certo a presença de bomba
    camposComBomba.forEach(campo => {
        if (!listaCamposMarcados.includes(campo)) {
            onRightClick(campo.posicaoX, campo.posicaoY)
        }
    })

    //Procura na lista de abertos, campos seguros para abrir
    //Verifica se a qtd de bombas do campo é igual a qtd de vizinhos marcados, e se a qtd de vizinhos marcados é menor que a qtd de vizinhos fechados
    listaCamposAbertosNaoZerados.forEach(campo => {
        if (campo.vizinhosBomba === getVizinhosMarcados(campo).length && getVizinhosMarcados(campo).length < getVizinhosFechados(campo).length) {
            getVizinhosFechados(campo).forEach(vizinho => {
                if (!vizinho.estaMarcado) {
                    camposSeguros.push(vizinho)
                }
            })
        }

    })

    //Abre os campos que são seguros
    camposSeguros.forEach(campo => {
        campoClick(campo.posicaoX, campo.posicaoY)
    })
}


//qtdBombas > 0 && (qtdBombas - qtdVizinhosMarcados) === 1 && qtdVizinhosFechadosNaoMarcados === 2
async function procuraCamposDeRisco() {
    let campoDeRisco = listaCamposAbertos.find(campo =>
        campo.vizinhosBomba > 0
        && (campo.vizinhosBomba - getVizinhosMarcados(campo).length) === 1
        && getVizinhosFechadosENaoMarcados(campo).length === 2
    )
    if (campoDeRisco) {
        let vizinhosDeRisco = getVizinhosFechadosENaoMarcados(campoDeRisco)
        let campoAdjacente = listaCamposAbertos.find(campo => {
            let vizinhoRisco1 = getVizinhosFechados(campo).find(vizinho =>
                vizinho.posicaoX === vizinhosDeRisco[0].posicaoX && vizinho.posicaoY === vizinhosDeRisco[0].posicaoY
            )
            let vizinhoRisco2 = getVizinhosFechados(campo).find(vizinho =>
                vizinho.posicaoX === vizinhosDeRisco[1].posicaoX && vizinho.posicaoY === vizinhosDeRisco[1].posicaoY
            )
            if(vizinhoRisco1 && vizinhoRisco2){
                if(campo !== campoDeRisco){
                    return campo
                }
            }
        })
        if(campoAdjacente){
            campoAdjacente.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => 
                campoVizinho !== undefined 
                && !campoVizinho.estaAberto 
                && campoVizinho !== vizinhosDeRisco[0] 
                && campoVizinho !== vizinhosDeRisco[1]).forEach(vizinho => {
                    let vizinhosMarcados = campoAdjacente.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => campoVizinho !== undefined && campoVizinho.estaMarcado).length
                    if((campoAdjacente.vizinhosBomba - vizinhosMarcados - 1) === 0){
                        campoClick(vizinho.posicaoX, vizinho.posicaoY)
                        console.log("Abriu por referencia")
                    }
                })
        }
            
    }
}

//Função chamada quando não se pode resolver seguramente os campos
//Calcula palpite de menor risco com base na probabilidade
function calculaMelhorProbabilidade() {
    let listaCamposParaAnalise = listaCamposAbertos.filter(campo => 
        campo.vizinhosBomba > 0 
        && campo.vizinhosBomba < getVizinhosFechados(campo).length 
        && getVizinhosFechados(campo).length > getVizinhosMarcados(campo).length
    )
    let campoMelhor = ''
    let melhorProbabilidade = 0

    listaCamposParaAnalise.forEach(campo => {
        const probabilidade = (getVizinhosFechados(campo).length / (campo.vizinhosBomba - getVizinhosMarcados(campo).length))

        if (probabilidade > melhorProbabilidade && probabilidade >= 0 && probabilidade <= 10) {
            melhorProbabilidade = probabilidade
            campoMelhor = campo
        }
    })

    let vizinhosFechadosCampoChute = getVizinhosFechadosENaoMarcados(campoMelhor)
    const numRandom = gerarNumRandom(vizinhosFechadosCampoChute.length)
    const campoChute = vizinhosFechadosCampoChute[numRandom]
    console.log("Chutou")
    campoClick(campoChute.posicaoX, campoChute.posicaoY)
}

//Procura na lista de abertos, se há pelo menos um campo campos seguros para abertura
//Se houver, retorna 1 que significa que o loop rodará novamente
//Se não houver, retorna 0 que significa que o loop não rodará novamente
function verificaLoop() {
    let campo = listaCamposAbertos.find(campo =>
        campo.vizinhosBomba > 0
        && ((campo.vizinhosBomba === getVizinhosFechados(campo).length
            && campo.vizinhosBomba !== getVizinhosMarcados(campo).length)
            || (campo.vizinhosBomba === getVizinhosMarcados(campo).length)
            && 0 < getVizinhosFechadosENaoMarcados(campo).length)
    )
    if (campo) {
        return true
    } else return false
}