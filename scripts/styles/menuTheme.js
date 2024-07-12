import { checkTheme } from "../elements/changeTheme.js"

export function menuTheme() {
    const difficultyButton = document.getElementById('difficulty-button')
    difficultyButton.style.backgroundColor = checkTheme().backgroundColor
    difficultyButton.style.borderColor = checkTheme().borderColor
    if(checkTheme().name === 'light'){
        difficultyButton.style.color = 'black'
    } else difficultyButton.style.color = 'white'

    const themeButton = document.getElementById('theme-button')
    themeButton.style.backgroundColor = checkTheme().backgroundColor
    themeButton.style.borderColor = checkTheme().borderColor
    if(checkTheme().name === 'light'){
        themeButton.style.color = 'black'
    } else themeButton.style.color = 'white'

    const startButton = document.getElementById('button-start')
    startButton.style.backgroundColor = checkTheme().backgroundColor
    startButton.style.borderColor = checkTheme().borderColor
    if(checkTheme().name === 'light'){
        startButton.style.color = 'black'
    } else startButton.style.color = 'white'
}

export function containerDifficultyTheme() {
    const containerDifficulty = document.getElementById('container-difficulty-div')
    containerDifficulty.style.backgroundColor = checkTheme().borderColorLigth
    containerDifficulty.style.borderColor = checkTheme().borderColor
    
    document.querySelectorAll('.difficulty-button').forEach(button => button.style.backgroundColor = checkTheme().backgroundColor)
    document.querySelectorAll('.difficulty-button').forEach(button => button.style.borderColor = checkTheme().borderColor)

    if(checkTheme().name === 'light'){
        containerDifficulty.style.color = 'black'
        document.querySelectorAll('.difficulty-button').forEach(button => button.style.color = 'black')
    } else {
        containerDifficulty.style.color = 'white'
        document.querySelectorAll('.difficulty-button').forEach(button => button.style.color = 'white')
    }
}

export function containerThemeTheme() {
    const containerTheme = document.getElementById('container-theme-div')
    containerTheme.style.backgroundColor = checkTheme().borderColorLigth
    containerTheme.style.borderColor = checkTheme().borderColor

    if(checkTheme().name === 'light'){
        containerTheme.style.color = 'black'
    } else {
        containerTheme.style.color = 'white'
    }
}