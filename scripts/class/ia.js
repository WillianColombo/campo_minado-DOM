import { campoClick } from "../gameController/gameEvents.js";
import { listaCamposLogicos } from "./campoLogico.js";

export let listaCamposAbertos = []

export function playIA() {
    aberturaInicial()
    resolverCamposCertos()
}

function aberturaInicial() {
    const campoRandom = listaCamposLogicos[gerarNumRandom(listaCamposLogicos.length)]
    campoClick(campoRandom.posicaoX, campoRandom.posicaoY)
}

function resolverCamposCertos() {
    //Proximo passo, fazer com que esta função execute até não tiver mais abertura seguras possíveis
    let camposCertos = []
    console.log(listaCamposAbertos)
    listaCamposAbertos.forEach(campo => {
        let arrayVizinhosFechados = campo.vizinho.flatMap(array => array.filter(vizinho => vizinho !== undefined && !vizinho.estaAberto
        ).length)
        let qtdVizinhosFechados = 0
        arrayVizinhosFechados.forEach(elemento => qtdVizinhosFechados += elemento)
        
        if(campo.vizinhosBomba === qtdVizinhosFechados && qtdVizinhosFechados !== 0){
            camposCertos.push(campo)
        }
    })
    camposCertos.forEach(campo => campoClick(campo.posicaoX, campo.posicaoY))
}

function gerarNumRandom(max) {
    return Math.floor(Math.random() * max)
}