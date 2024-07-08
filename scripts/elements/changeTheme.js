import { acharCampo } from "../class/campoLogico.js"
import { imageButton } from "../styles/campoStyle.js"

export let themes = [
    { name: "brown", select: false },
    { name: "dark", select: true },
    { name: "ligth", select: false },
    { name: "green", select: false }
]

export function createChangeTheme() {
    const div = document.createElement('div')
    const buttonBrown = document.createElement('button')
    const buttonDark = document.createElement('button')
    const buttonLigth = document.createElement('button')
    const buttonGreen = document.createElement('button')

    buttonBrown.id = 'brown'
    buttonDark.id = 'dark'
    buttonLigth.id = 'ligth'
    buttonGreen.id = 'green'

    buttonBrown.className = 'button-theme'
    buttonDark.className = 'button-theme'
    buttonLigth.className = 'button-theme'
    buttonGreen.className = 'button-theme'

    buttonBrown.innerText = 'Marrom'
    buttonDark.innerText = 'Escuro'
    buttonLigth.innerText = 'Claro'
    buttonGreen.innerText = 'Verde'

    buttonBrown.onclick = () => changeTheme(buttonBrown)
    buttonDark.onclick = () => changeTheme(buttonDark)
    buttonLigth.onclick = () => changeTheme(buttonLigth)
    buttonGreen.onclick = () => changeTheme(buttonGreen)

    div.append(buttonBrown, buttonDark, buttonLigth, buttonGreen)
    
    return div
}

export function buttonThemeInit(){
    document.getElementById(themes.find(theme => theme.select).name).disabled = true
}

function changeTheme(newTheme){
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