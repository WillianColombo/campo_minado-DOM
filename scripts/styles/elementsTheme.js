import { checkTheme } from "../elements/changeTheme.js"

export function elementsTheme(elementsList) {
    elementsList.forEach(element => {
        if (element) {
            if (element.id === 'container-difficulty-div' || element.id === 'container-theme-div') {
                element.style.backgroundColor = checkTheme().borderColorLigth
                element.style.borderTopColor = checkTheme().backgroundColor
                element.style.borderLeftColor = checkTheme().backgroundColor
                element.style.borderBottomColor = checkTheme().borderColor
                element.style.borderRightColor = checkTheme().borderColor
                if (element.id === 'container-difficulty-div') {
                    difficultyButtonsTheme()
                }
            } else {
                element.style.backgroundColor = checkTheme().backgroundColor
                element.style.borderTopColor = checkTheme().borderColorLigth
                element.style.borderLeftColor = checkTheme().borderColorLigth
                element.style.borderBottomColor = checkTheme().borderColor
                element.style.borderRightColor = checkTheme().borderColor
            }
            if (checkTheme().name === 'light') {
                element.style.color = 'black'
            } else element.style.color = 'white'
        }
    })
}

export function containerDifficultyTheme() {
    const containerDifficulty = document.getElementById('container-difficulty-div')
    containerDifficulty.style.backgroundColor = checkTheme().borderColorLigth
    containerDifficulty.style.borderTopColor = checkTheme().backgroundColor
    containerDifficulty.style.borderLeftColor = checkTheme().backgroundColor
    containerDifficulty.style.borderBottomColor = checkTheme().borderColor
    containerDifficulty.style.borderRightColor = checkTheme().borderColor

    difficultyButtonsTheme()

    if (checkTheme().name === 'light') {
        containerDifficulty.style.color = 'black'
        document.querySelectorAll('.difficulty-button').forEach(button => button.style.color = 'black')
    } else {
        containerDifficulty.style.color = 'white'
        document.querySelectorAll('.difficulty-button').forEach(button => button.style.color = 'white')
    }
}

function difficultyButtonsTheme(){
    document.querySelectorAll('.difficulty-button').forEach(button => {
        button.style.backgroundColor = checkTheme().backgroundColor
        button.style.borderTopColor = checkTheme().borderColorLigth
        button.style.borderLeftColor = checkTheme().borderColorLigth
        button.style.borderBottomColor = checkTheme().borderColor
        button.style.borderRightColor = checkTheme().borderColor
        if (checkTheme().name === 'light') {
            button.style.color = 'black'
        } else button.style.color = 'white'
    })
    
}

export function containerThemeTheme() {
    const containerTheme = document.getElementById('container-theme-div')
    containerTheme.style.backgroundColor = checkTheme().borderColorLigth
    containerTheme.style.borderTopColor = checkTheme().borderColor
    containerTheme.style.borderLeftColor = checkTheme().borderColor
    containerTheme.style.borderBottomColor = checkTheme().backgroundColor
    containerTheme.style.borderRightColor = checkTheme().backgroundColor
    if (checkTheme().name === 'light') {
        containerTheme.style.color = 'black'
    } else containerTheme.style.color = 'white'
}