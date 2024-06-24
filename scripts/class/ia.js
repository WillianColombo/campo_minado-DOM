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
    let camposCertos = []
    console.log(listaCamposAbertos)
    listaCamposAbertos.forEach(campo => {
        let vizinhosFechados = campo.vizinho.flatMap(array => array.filter(vizinho => vizinho !== undefined && !vizinho.estaAberto
        ).length)
        console.log(vizinhosFechados)
    })
}

function gerarNumRandom(max) {
    return Math.floor(Math.random() * max)
}