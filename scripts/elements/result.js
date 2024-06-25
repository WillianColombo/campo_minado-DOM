import { abrirGameOver, desabilitarTabuleiro } from "../class/tabuleiro.js"
import { restartGame } from "../gameController/gameEvents.js"

export function createFloatDiv(conteudo){
    const floatDiv = document.createElement('div')
    floatDiv.id = "float-div"
    floatDiv.innerHTML = conteudo.title

    const overlay = document.createElement('div')
    overlay.id = 'overlay-div'

    const buttonRestart = document.createElement('button')
    buttonRestart.id = 'button-restart'
    buttonRestart.innerText = conteudo.button
    buttonRestart.onclick = () => reiniciarFlutuante(floatDiv, overlay)

    abrirFlutuante(floatDiv, overlay)

    const body = document.querySelector("body")
    floatDiv.appendChild(buttonRestart)
    body.append(floatDiv, overlay)
}

//Habilita a div flutuante e faz o overlay
function abrirFlutuante(floatDiv, overlay) {
    floatDiv.style.display = 'block';
    overlay.style.display = 'block';
}

//Desabilita a div flutuante e o overlay, reinicia o jogo
function reiniciarFlutuante(floatDiv, overlay) {
    floatDiv.style.display = 'none';
    overlay.style.display = 'none';

    restartGame()
}

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
    console.log("Win = " + win)
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
    console.log("Defeat = " + defeat)
    createFloatDiv(defeatMessage)
}