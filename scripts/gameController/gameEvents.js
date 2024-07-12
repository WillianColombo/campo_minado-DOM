import { abrirCampo, listaCamposLogicos, marcarCampo, marcarCampoRisco, resetListaCamposLogicos } from "../class/campoLogico.js"
import { resetListasIA } from "../class/ia.js";
import { adicionarVizinhos, atualizarVizinhosBomba, resetCamposElementos } from "../class/tabuleiro.js"
import { resetContFlag } from "../elements/appBarElement.js";
import { gerarCampos } from "../elements/campoElement.js";
import { resetDefeat, resetWin } from "../elements/result.js";
import { initStyleButton } from "../styles/campoStyle.js";
import { checkDifficulty } from "../elements/changeDifficulty.js"
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


export function onRightClick(ev, posicaoX, posicaoY) {
    if (ev.shiftKey) {
        marcarCampoRisco(posicaoX, posicaoY)
    } else if(ev){
        marcarCampo(posicaoX, posicaoY) 
    }
}

export function restartGame() {
    resetListaCamposLogicos()
    resetListasIA()
    resetCamposElementos()
    resetPrimeiroClick()
    resetWin()
    resetDefeat()
    gerarCampos(checkDifficulty().qtdColunas)
    initStyleButton()
    adicionarVizinhos()
    atualizarVizinhosBomba(listaCamposLogicos)
    resetContFlag()
}
