import { acharCampo } from "../class/campoLogico.js"
import { imageButton } from "../styles/campoStyle.js"

export let themes = [
    { name: "brown", select: false },
    { name: "dark", select: true },
    { name: "ligth", select: false },
    { name: "green", select: false }
]

export function createChangeTheme() {
    const themeDiv = document.createElement('div')
    themeDiv.id = 'theme-div'

    const themeButton = document.createElement('button')
    themeButton.id = 'theme-button'
    themeButton.onclick = () => {
        const buttonDiv = document.getElementById('container-theme-div')
        if (buttonDiv) {
            buttonDiv.remove()
        } else {
            themeDiv.appendChild(openContainerTheme())
            document.getElementById(themes.find(theme => theme.select).name).disabled = true
        }
    }

    themeDiv.appendChild(themeButton)

    return themeDiv
}

function openContainerTheme() {
    const brownButton = document.createElement('button')
    const darkButton = document.createElement('button')
    const ligthButton = document.createElement('button')
    const greenButton = document.createElement('button')

    brownButton.id = 'brown'
    darkButton.id = 'dark'
    ligthButton.id = 'ligth'
    greenButton.id = 'green'

    brownButton.className = 'theme-button'
    darkButton.className = 'theme-button'
    ligthButton.className = 'theme-button'
    greenButton.className = 'theme-button'

    brownButton.onclick = () => changeTheme(brownButton)
    darkButton.onclick = () => changeTheme(darkButton)
    ligthButton.onclick = () => changeTheme(ligthButton)
    greenButton.onclick = () => changeTheme(greenButton)


    const buttonDiv = document.createElement('div')
    buttonDiv.id = 'container-theme-div'

    buttonDiv.append(brownButton, darkButton, ligthButton, greenButton)

    return buttonDiv
}

function changeTheme(newTheme) {
    document.getElementById(themes.find(theme => theme.select).name).disabled = false
    themes.find(theme => theme.select).select = false
    newTheme.disabled = true
    themes.find(theme => theme.name === newTheme.id).select = true

    document.querySelectorAll('.botao').forEach(button => {
        const position = button.id.split("-")
        const campo = acharCampo(parseInt(position[0]), parseInt(position[1]))

        imageButton(button, campo)
    })
}