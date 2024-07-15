import { containerDifficultyTheme, containerThemeTheme, menuTheme } from "../styles/menuTheme.js"

let difficultys = [
    { name: "small", select: true, qtdColunas: 20, porcBombas: 0.1},
    { name: "medium", select: false, qtdColunas: 30, porcBombas: 0.2},
    { name: "big", select: false, qtdColunas: 43, porcBombas: 0.25},
    { name: "giant", select: false, qtdColunas: 56, porcBombas: 0.3}
]

export function checkDifficulty(){
    return difficultys.find(difficulty => difficulty.select)
}

export function createChangeDifficulty() {
    const difficultyDiv = document.createElement('div')
    difficultyDiv.id = 'difficulty-div'
    const arrow = document.createElement('span')
    arrow.innerText = '>'

    const difficultyButton = document.createElement('button')
    difficultyButton.id = 'difficulty-button'
    difficultyButton.className = 'difficulty-button'
    difficultyButton.innerText = 'Dificuldade  '
    difficultyButton.appendChild(arrow)
    arrow.className = 'arrow-container-down'
    difficultyButton.onclick = () => {
        const buttonDiv = document.getElementById('container-difficulty-div')
        if (buttonDiv) {
            buttonDiv.remove()
            arrow.className = 'arrow-container-down'
        } else {
            difficultyDiv.appendChild(openContainerDifficulty())
            initArrowDifficulty()
            buttonsSize()
            containerDifficultyTheme()
            document.getElementById(difficultys.find(difficulty => difficulty.select).name).disabled = true
            arrow.className = 'arrow-container-up'
        }
    }

    difficultyDiv.appendChild(difficultyButton)

    return difficultyDiv
}

function openContainerDifficulty() {
    const smallDiv = document.createElement('div')
    const mediumDiv = document.createElement('div')
    const bigDiv = document.createElement('div')
    const giantDiv = document.createElement('div')

    const smallButton = document.createElement('button')
    const mediumButton = document.createElement('button')
    const bigButton = document.createElement('button')
    const giantButton = document.createElement('button')

    smallButton.id = 'small'
    mediumButton.id = 'medium'
    bigButton.id = 'big'
    giantButton.id = 'giant'

    smallButton.innerText = 'Small'
    mediumButton.innerText = 'Medium'
    bigButton.innerText = 'Big'
    giantButton.innerText = 'Giant'

    smallDiv.className = 'option-difficulty-div'
    mediumDiv.className = 'option-difficulty-div'
    bigDiv.className = 'option-difficulty-div'
    giantDiv.className = 'option-difficulty-div'

    smallDiv.id = 'small-div'
    mediumDiv.id = 'medium-div'
    bigDiv.id = 'big-div'
    giantDiv.id = 'giant-div'

    smallButton.className = 'difficulty-button'
    mediumButton.className = 'difficulty-button'
    bigButton.className = 'difficulty-button'
    giantButton.className = 'difficulty-button'

    smallButton.onclick = () => {changeDifficulty(smallButton), createArrowDifficulty(smallDiv)}
    mediumButton.onclick = () => {changeDifficulty(mediumButton), createArrowDifficulty(mediumDiv)}
    bigButton.onclick = () => {changeDifficulty(bigButton), createArrowDifficulty(bigDiv)}
    giantButton.onclick = () => {changeDifficulty(giantButton), createArrowDifficulty(giantDiv)}

    smallDiv.appendChild(smallButton)
    mediumDiv.appendChild(mediumButton)    
    bigDiv.appendChild(bigButton)
    giantDiv.appendChild(giantButton)

    const buttonDiv = document.createElement('div')
    buttonDiv.id = 'container-difficulty-div'

    buttonDiv.append(smallDiv, mediumDiv, bigDiv, giantDiv)

    return buttonDiv
}

function initArrowDifficulty(){
    createArrowDifficulty(document.getElementById(`${difficultys.find(difficulty => difficulty.select).name}-div`))
}

function createArrowDifficulty(div){
    const arrow = document.createElement('span')
    arrow.innerText = '<'
    arrow.id = 'arrow-difficulty'
    div.appendChild(arrow)
}

function changeDifficulty(newDifficulty) {
    document.getElementById('arrow-difficulty').remove()
    document.getElementById(difficultys.find(difficulty => difficulty.select).name).disabled = false
    difficultys.find(difficulty => difficulty.select).select = false
    newDifficulty.disabled = true
    difficultys.find(difficulty => difficulty.name === newDifficulty.id).select = true
}

function buttonsSize(){
    document.querySelectorAll('.difficulty-button').forEach(buttom => {
        if (buttom.id !== 'difficulty-button') {
            buttom.style.width = document.getElementById('medium').offsetWidth + "px";
        }
    })
}