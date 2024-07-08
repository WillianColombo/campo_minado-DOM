import { listaCamposLogicos } from "../class/campoLogico.js"
import { playIA } from "../class/ia.js"
import { restartGame } from "../gameController/gameEvents.js"
import { dificuldadeEscolhida } from "../gameController/gameMenu.js"
import { buttonThemeInit, createChangeTheme } from "./changeTheme.js"
import { createFloatDiv } from "./floatDiv.js"

export function createAppBar() {
    createRestartButton()
    createIaButton()
    createHomeButton()
    createContFlags()
    document.getElementById("app_bar").append(createChangeTheme())
    buttonThemeInit()
}

export function createRestartButton() {
    const appBar = document.getElementById("app_bar")

    const restartButtom = document.createElement('button')
    restartButtom.innerText = "Reiniciar"
    restartButtom.onclick = () => restartGame()

    appBar.appendChild(restartButtom)
}

export function createIaButton() {
    const appBar = document.getElementById("app_bar")

    const iaButtom = document.createElement('button')
    iaButtom.innerText = "IA"
    iaButtom.onclick = () => playIA()

    appBar.appendChild(iaButtom)
}

export function createHomeButton() {
    const appBar = document.getElementById("app_bar")

    const homeButton = document.createElement('button')
    homeButton.innerText = "Página Inicial"
    homeButton.onclick = () => createFloatDiv(1, 2)

    appBar.appendChild(homeButton)
}

export function createContFlags() {
    const appBar = document.getElementById("app_bar")

    const contFlags = document.createElement('div')
    contFlags.id = 'cont-flag'
    contFlags.innerText = parseInt(listaCamposLogicos.length * dificuldadeEscolhida.porcBombas)

    appBar.appendChild(contFlags)
}

export function updateContFlag(x) {
    const contFlags = document.getElementById('cont-flag')
    if (x === 1) {
        contFlags.innerText--
    } else {
        contFlags.innerText++
    }
}

export function resetContFlag() {
    const contFlags = document.getElementById("cont-flag")
    contFlags.innerText = parseInt(listaCamposLogicos.length * dificuldadeEscolhida.porcBombas)
}