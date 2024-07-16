import { listaCamposLogicos } from "../class/campoLogico.js"
import { playIA } from "../class/ia.js"
import { restartGame } from "../gameController/gameEvents.js"
import { checkDifficulty } from "../elements/changeDifficulty.js"
import { createChangeTheme } from "./changeTheme.js"
import { createFloatDiv } from "./floatDiv.js"

export function createAppBar() {
    const appBar = document.getElementById("app-bar")

    const leftAppBarSection = document.createElement('section')
    leftAppBarSection.id = 'left-appbar-section'
    const middleAppBarSection = document.createElement('section')
    middleAppBarSection.id = 'middle-appbar-section'
    const rightAppBarSection = document.createElement('section')
    rightAppBarSection.id = 'right-appbar-section'

    leftAppBarSection.append(createHomeButton(), createRestartButton())
    middleAppBarSection.appendChild(createContFlags())
    rightAppBarSection.append(createIaButton(), createChangeTheme())

    appBar.append(leftAppBarSection, middleAppBarSection, rightAppBarSection)

    document.getElementById('theme-button').className = 'appbar-elements'
    document.getElementById('theme-button').id = 'theme-button-appbar'
    
}

function createRestartButton() {
    const restartButtom = document.createElement('button')
    restartButtom.innerText = "Reiniciar"
    restartButtom.className = 'appbar-elements'
    restartButtom.onclick = () => restartGame()

    return restartButtom
}

function createIaButton() {
    const iaButtom = document.createElement('button')
    iaButtom.innerText = "IA"
    iaButtom.className = 'appbar-elements'
    iaButtom.onclick = () => playIA()

    return iaButtom
}

function createHomeButton() {
    const homeButton = document.createElement('button')
    homeButton.innerText = "<--"
    homeButton.className = 'appbar-elements'
    homeButton.onclick = () => createFloatDiv(1, 2)

    return homeButton
}

function createContFlags() {
    const contFlags = document.createElement('div')

    const img = document.createElement('img')
    img.src = '/estilo_botoes/bandeira.png'
    img.id = 'flag'
    
    const div = document.createElement('div')
    div.appendChild(img)
    
    
    const span = document.createElement('span')
    span.id = 'cont'
    span.innerText = parseInt(listaCamposLogicos.length * checkDifficulty().porcBombas)
    
    contFlags.id = 'cont-flag'
    contFlags.className = 'appbar-elements'
    contFlags.append(div, span)

    return contFlags
}

export function updateContFlag(x) {
    const contFlags = document.getElementById('cont')
    if (x === 1) {
        contFlags.innerText--
    } else {
        contFlags.innerText++
    }
}

export function resetContFlag() {
    const contFlags = document.getElementById("cont")
    contFlags.innerText = parseInt(listaCamposLogicos.length * checkDifficulty().porcBombas)
}