import { campoClick, onRightClick } from "../gameController/gameEvents.js";
import { listaCamposLogicos } from "./campoLogico.js";

export let listaCamposAbertos = []

export function playIA() {
    aberturaInicial()

    resolverCamposSeguros()
    // let condicao = 1
    // do {
    //     condicao = resolverCamposCertos()
    //     console.log("Executou")
    //   } while (condicao > 0);
}

function aberturaInicial() {
    const campoRandom = listaCamposLogicos[gerarNumRandom(listaCamposLogicos.length)]
    campoClick(campoRandom.posicaoX, campoRandom.posicaoY)
}

function resolverCamposSeguros() {
    //Proximo passo, fazer com que esta função execute até não tiver mais abertura seguras possíveis
    let camposSeguros = []

    //Filtra os campos abertos que possuem algum vizinho com bomba
    let listaCamposAbertosNaoZerados = listaCamposAbertos.filter(campo => campo.vizinhosBomba > 0)

    //Procura na lista de abertos, campos seguros para abertura
    //Verifica se o número de campos adjacentes é igual ao número de bombas adjacentes
    listaCamposAbertosNaoZerados.forEach(campo => {
        let vizinhosFechados = campo.vizinho.flatMap(vizinho => vizinho).filter(campoVizinho => campoVizinho !== undefined && !campoVizinho.estaAberto)
        if(campo.vizinhosBomba === vizinhosFechados.length){
            vizinhosFechados.forEach(vizinho => camposSeguros.push(vizinho))
        }
    })
    
    //PRÓXIMO PASSO - ESTÁ MARCANDO PARCIALMENTE OS CAMPOS
    //Faz a abertura dos campos seguros
    console.log(camposSeguros)
    camposSeguros.forEach(campo => {
        listaCamposAbertos.push(campo)
        onRightClick(campo.posicaoX, campo.posicaoY)
        console.log(`Aberto ${campo.posicaoX}-${campo.posicaoY}`)
    })
}

function gerarNumRandom(max) {
    return Math.floor(Math.random() * max)
}