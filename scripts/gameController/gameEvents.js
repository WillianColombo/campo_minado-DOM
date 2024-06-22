import { abrirCampo, listaCamposLogicos, marcarCampo, resetListaCamposLogicos } from "../class/campoLogico.js"
import { adicionarVizinhos, atualizarVizinhosBomba, resetCamposElementos } from "../class/tabuleiro.js"
import { resetContFlag } from "../elements/appBarElement.js";
import { gerarCampos } from "../elements/campoElement.js";
//import { initStyle } from "../styles/campoStyle.js";
import { dificuldadeEscolhida } from "./gameMenu.js"
import { primeiroClick } from "./primeiroClick.js";

let contCampoClick = 0
export function campoClick(posicaoX, posicaoY) {
    if (contCampoClick === 0) {
        primeiroClick(posicaoX, posicaoY)
        contCampoClick++
    } else {
        abrirCampo(posicaoX, posicaoY)
    }
}

export function resetPrimeiroClick() {
    contCampoClick = 0
}

//Desativa a função padrão do botão direito do mouse
document.querySelector("body").addEventListener("contextmenu", function (ev) {
    ev.preventDefault()
})


export function onRightClick(posicaoX, posicaoY) {
    marcarCampo(posicaoX, posicaoY)
}

export function restartGame() {
    resetListaCamposLogicos()
    resetCamposElementos()
    resetPrimeiroClick()
    gerarCampos(dificuldadeEscolhida.qtdColunas)
    initStyle()
    adicionarVizinhos()
    atualizarVizinhosBomba(listaCamposLogicos)
    resetContFlag()
}
