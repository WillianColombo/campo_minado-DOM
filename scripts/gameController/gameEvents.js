import { abrirCampo, marcarCampo } from "../class/campoLogico.js"
import { resetarTabuleiro } from "../class/tabuleiro.js"

export function campoClick(posicaoX, posicaoY){
    abrirCampo(posicaoX, posicaoY)
}

//Desativa a função padrão do botão direito do mouse
document.querySelector("body").addEventListener("contextmenu", function(ev){
    ev.preventDefault()
})


export function onRightClick(posicaoX, posicaoY) {
    marcarCampo(posicaoX, posicaoY)
}

export function restartGame(){
    resetarTabuleiro()
}
