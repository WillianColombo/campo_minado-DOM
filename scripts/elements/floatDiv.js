import { restartGame } from "../gameController/gameEvents.js"
import { buildMenu } from "../gameController/gameMenu.js"

export function createFloatDiv(conteudo = {}, option = 1) {
    const floatDiv = document.createElement('div')
    floatDiv.id = "float-div"

    const overlay = document.createElement('div')
    overlay.id = 'overlay-div'

    if (option === 1) {
        floatDiv.innerHTML = conteudo.title

        const buttonRestart = document.createElement('button')
        buttonRestart.id = 'button-restart'
        buttonRestart.innerText = conteudo.button
        buttonRestart.onclick = () => reiniciarFlutuante(floatDiv, overlay)

        floatDiv.appendChild(buttonRestart)
    } else if (option === 2) {
        const buttonOk = document.createElement('button')
        const buttonCancel = document.createElement('button')

        buttonOk.id = 'button-ok'
        buttonCancel.id = 'button-cancel'

        buttonOk.innerText = 'Continuar'
        buttonCancel.innerText = 'Cancelar'

        floatDiv.innerHTML = 'Se você sair, perderá o progresso da partida. Deseja continuar?'

        buttonOk.onclick = () => {
            restartGame()
            const body = document.querySelector('body')
            body.innerHTML = ''
            buildMenu()
        }
        buttonCancel.onclick = () => reiniciarFlutuante(floatDiv, overlay, 2)

        floatDiv.append(buttonOk, buttonCancel)
    }

    abrirFlutuante(floatDiv, overlay)

    const body = document.querySelector("body")
    body.append(floatDiv, overlay)
}

//Habilita a div flutuante e faz o overlay
function abrirFlutuante(floatDiv, overlay) {
    floatDiv.style.display = 'block';
    overlay.style.display = 'block';
}

//Desabilita a div flutuante e o overlay, reinicia o jogo
function reiniciarFlutuante(floatDiv, overlay, option = 1) {
    floatDiv.style.display = 'none';
    overlay.style.display = 'none';

    if (option === 1) {
        restartGame()
    }
}