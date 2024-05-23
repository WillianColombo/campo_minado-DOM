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

export function gameWin() {
    const win = {
        title: "Parabéns, você venceu o jogo!",
        button: "Jogar Novamente"
    }

    createFloatDiv(win)
}

export function gameOver() {
    const defeat = {
        title: "GameOver, tente novamente!",
        button: "Tentar Novamente"
    }

    createFloatDiv(defeat)
}