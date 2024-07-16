import { resetListaCamposLogicos } from "../class/campoLogico.js"
import { resetListasIA } from "../class/ia.js"
import { resetCamposElementos } from "../class/tabuleiro.js"
import { resetPrimeiroClick, restartGame } from "../gameController/gameEvents.js"
import { buildMenu } from "../gameController/gameMenu.js"
import { resetContFlag } from "./appBarElement.js"
import { resetDefeat, resetWin } from "./result.js"

export function createFloatDiv(conteudo = {}, option = 1) {
    let floatDiv = ''
    let overlay = ''

    if(!document.getElementById('float-div') && !document.getElementById('overlay-div')){
        floatDiv = document.createElement('div')
        floatDiv.id = "float-div"
        
        overlay = document.createElement('div')
        overlay.id = 'overlay-div'
    } else {
        floatDiv = document.getElementById('float-div')
        overlay =  document.getElementById('overlay-div')
    }

    if (option === 1) {
        floatDiv.innerHTML = conteudo.title

        const buttonRestart = document.createElement('button')
        buttonRestart.id = 'red-button'
        buttonRestart.className = 'button-float'
        buttonRestart.innerText = conteudo.button
        buttonRestart.onclick = () => reiniciarFlutuante(floatDiv, overlay)

        floatDiv.appendChild(buttonRestart)
    } else if (option === 2) {
        const buttonOk = document.createElement('button')
        const buttonCancel = document.createElement('button')

        buttonOk.className = 'button-float'
        buttonCancel.className = 'button-float'
        buttonOk.id = 'blue-button'
        buttonCancel.id = 'red-button'

        buttonOk.innerText = 'Continuar'
        buttonCancel.innerText = 'Cancelar'

        floatDiv.innerHTML = 'Se você sair, perderá o progresso da partida. Deseja continuar?'

        buttonOk.onclick = () => {
            resetLists()
            const body = document.querySelector('body')
            body.innerHTML = ''
            buildMenu()
        }
        buttonCancel.onclick = () => reiniciarFlutuante(floatDiv, overlay, 2)

        const optionsExit = document.createElement('div')
        optionsExit.id = 'options-exit-float'
        optionsExit.append(buttonOk, buttonCancel)
        
        floatDiv.appendChild(optionsExit)
    }

    abrirFlutuante(floatDiv, overlay)

    const body = document.querySelector("body")
    body.append(floatDiv, overlay)
}

//Habilita a div flutuante e faz o overlay
function abrirFlutuante(floatDiv, overlay) {
    floatDiv.style.display = 'flex';
    overlay.style.display = 'flex';
}

//Desabilita a div flutuante e o overlay, reinicia o jogo
function reiniciarFlutuante(floatDiv, overlay, option = 1) {
    floatDiv.style.display = 'none';
    overlay.style.display = 'none';

    if (option === 1) {
        restartGame()
    }
}

function resetLists(){
    resetListaCamposLogicos()
    resetListasIA()
    resetCamposElementos()
    resetPrimeiroClick()
    resetWin()
    resetDefeat()
    resetContFlag()
}