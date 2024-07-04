import { abrirGameOver, desabilitarTabuleiro } from "../class/tabuleiro.js"
import { createFloatDiv } from "./floatDiv.js"

let win = false
export function getWin(){
    return win
}
export function resetWin(){
    win = false
}
export function gameWin() {
    const winMessage = {
        title: "Parabéns, você venceu o jogo!",
        button: "Jogar Novamente"
    }
    win = true
    createFloatDiv(winMessage)
}

let defeat = false
export function getDefeat(){
    return defeat
}
export function resetDefeat(){
    defeat = false
}
export function gameOver() {
    abrirGameOver()
    desabilitarTabuleiro()
    const defeatMessage = {
        title: "GameOver, tente novamente!",
        button: "Tentar Novamente"
    }
    defeat = true
    createFloatDiv(defeatMessage)
}