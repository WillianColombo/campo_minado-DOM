import { acharCampo } from "../class/campoLogico.js"
import { imageButton } from "../styles/campoStyle.js"
import { containerThemeTheme, menuTheme } from "../styles/menuTheme.js"

export let themes = [
    {
        name: "brown",
        select: false,
        backgroundColor: '#B85639',
        borderColor: '#75331D',
        borderColorLigth: '#D2907A'
    },
    {
        name: "dark",
        select: true,
        backgroundColor: '#393437',
        borderColor: '#1b1619',
        borderColorLigth: '#575154'
    },
    {
        name: "light",
        select: false,
        backgroundColor: '#dfdde6',
        borderColor: '#bebbcd',
        borderColorLigth: '#ffffff'
    },
    {
        name: "green",
        select: false,
        backgroundColor: '#1ab668',
        borderColor: '#009046',
        borderColorLigth: '#33dc8a'
    }
]

export function checkTheme(){
    return themes.find(theme => theme.select)
}

export function createChangeTheme() {
    const themeDiv = document.createElement('div')
    themeDiv.id = 'theme-div'
    const arrow = document.createElement('span')
    arrow.innerText = '>'

    const themeButton = document.createElement('button')
    themeButton.id = 'theme-button'
    themeButton.className = 'theme-button'
    themeButton.innerText = 'Mudar Tema  '
    themeButton.appendChild(arrow)
    arrow.className = 'arrow-container-down'
    themeButton.onclick = () => {
        const buttonDiv = document.getElementById('container-theme-div')
        if (buttonDiv) {
            buttonDiv.remove()
            arrow.className = 'arrow-container-down'
        } else {
            themeDiv.appendChild(openContainerTheme())
            initArrowTheme()
            containerThemeTheme()
            document.getElementById(themes.find(theme => theme.select).name).disabled = true
            arrow.className = 'arrow-container-up'
        }
    }

    themeDiv.appendChild(themeButton)

    return themeDiv
}

function openContainerTheme() {
    const brownDiv = document.createElement('div')
    const darkDiv = document.createElement('div')
    const lightDiv = document.createElement('div')
    const greenDiv = document.createElement('div')

    const brownButton = document.createElement('button')
    const darkButton = document.createElement('button')
    const lightButton = document.createElement('button')
    const greenButton = document.createElement('button')

    brownButton.id = 'brown'
    darkButton.id = 'dark'
    lightButton.id = 'light'
    greenButton.id = 'green'

    brownDiv.className = 'option-theme-div'
    darkDiv.className = 'option-theme-div'
    lightDiv.className = 'option-theme-div'
    greenDiv.className = 'option-theme-div'

    brownDiv.id = 'brown-div'
    darkDiv.id = 'dark-div'
    lightDiv.id = 'light-div'
    greenDiv.id = 'green-div'

    brownButton.className = 'theme-button'
    darkButton.className = 'theme-button'
    lightButton.className = 'theme-button'
    greenButton.className = 'theme-button'

    brownButton.onclick = () => { changeTheme(brownButton), createArrowTheme(brownDiv) }
    darkButton.onclick = () => { changeTheme(darkButton), createArrowTheme(darkDiv) }
    lightButton.onclick = () => { changeTheme(lightButton), createArrowTheme(lightDiv) }
    greenButton.onclick = () => { changeTheme(greenButton), createArrowTheme(greenDiv) }

    brownDiv.appendChild(brownButton)
    darkDiv.appendChild(darkButton)
    lightDiv.appendChild(lightButton)
    greenDiv.appendChild(greenButton)

    const buttonDiv = document.createElement('div')
    buttonDiv.id = 'container-theme-div'

    buttonDiv.append(brownDiv, darkDiv, lightDiv, greenDiv)

    return buttonDiv
}

function initArrowTheme() {
    createArrowTheme(document.getElementById(`${themes.find(theme => theme.select).name}-div`))
}

function createArrowTheme(div) {
    const arrow = document.createElement('span')
    arrow.innerText = '<'
    arrow.id = 'arrow-theme'
    div.appendChild(arrow)
}

function changeTheme(newTheme) {
    document.getElementById('arrow-theme').remove()
    document.getElementById(themes.find(theme => theme.select).name).disabled = false
    themes.find(theme => theme.select).select = false
    newTheme.disabled = true
    themes.find(theme => theme.name === newTheme.id).select = true

    document.querySelectorAll('.botao').forEach(button => {
        const position = button.id.split("-")
        const campo = acharCampo(parseInt(position[0]), parseInt(position[1]))

        imageButton(button, campo)
    })
    if(document.getElementById('div-body')){
        menuTheme()
    }
}