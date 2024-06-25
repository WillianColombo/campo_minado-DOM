import { campoClick, onRightClick } from "../gameController/gameEvents.js";
import { listaCamposLogicos } from "./campoLogico.js";

export let listaCamposAbertos = []

export function resetListaCamposAbertos(){
    listaCamposAbertos = []
}

export async function playIA() {
    aberturaInicial()

    let condicao = true
    while (condicao){
        await resolverCampos()
        condicao = verificaLoop()
        await sleep()
    }
}

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
        let vizinhosFechados = campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => campoVizinho !== undefined && !campoVizinho.estaAberto && !campoVizinho.estaMarcado)
        if(campo.vizinhosBomba === vizinhosFechados.length){
            vizinhosFechados.forEach(vizinho => {
                //Aqui ele verifica se o campo em questão já não está na lista
                //Previne que o campo seja marcado e desmarcado
                const verificacao = camposComBomba.find(campoCertoComBomba => campoCertoComBomba.posicaoX === vizinho.posicaoX && campoCertoComBomba.posicaoY === vizinho.posicaoY)    
                if(!verificacao){
                    camposComBomba.push(vizinho)
                }
            })
        }
    })
    
    //Marca os campos que é certo a presença de bomba
    camposComBomba.forEach(campo => {
        onRightClick(campo.posicaoX, campo.posicaoY)
    })

    //Procura na lista de abertos, campos seguros para abrir
    //Verifica se a qtd de bombas do campo é igual a qtd de vizinhos marcados, e se a qtd de vizinhos marcados é menor que a qtd de vizinhos fechados
    listaCamposAbertosNaoZerados.forEach(campo => {
        let vizinhosFechados = campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => campoVizinho !== undefined && !campoVizinho.estaAberto)
        let vizinhosMarcados = campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => campoVizinho !== undefined && campoVizinho.estaMarcado)

        if(campo.vizinhosBomba === vizinhosMarcados.length && vizinhosMarcados.length < vizinhosFechados.length){
            vizinhosFechados.forEach(vizinho => {
                if(!vizinho.estaMarcado){
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

//Procura na lista de abertos, se há pelo menos um campo campos seguros para abertura
//Se houver, retorna 1 que significa que o loop rodará novamente
//Se não houver, retorna 0 que significa que o loop não rodará novamente
function verificaLoop() {
    let campo = listaCamposAbertos.find(campo => campo.vizinhosBomba === campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => campoVizinho !== undefined && !campoVizinho.estaAberto && !campoVizinho.estaMarcado).length && campo.vizinhosBomba !== 0)
    if(campo){
        return true
    } else return false
}

function gerarNumRandom(max) {
    return Math.floor(Math.random() * max)
}

//Função define um delay para que o código não entre em loop infinito 
function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}