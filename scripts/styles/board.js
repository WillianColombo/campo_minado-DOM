import { checkTheme } from "../elements/changeTheme.js"
import { elementsTheme } from "./elementsTheme.js"

export function boardTheme(){
    //Muda o fundo do tabuleiro
    const board = document.getElementById('tabuleiro')
    board.style.backgroundColor = checkTheme().backgroundColor
    
    //Todos os elementos que recebem o tema
    let elementsList = [document.getElementById('container-theme-div')]
    document.querySelectorAll('.appbar-elements').forEach(element => elementsList.push(element))
    elementsTheme(elementsList)
}

export function randomBackgroundGame(max){
    const divGame = document.getElementById('game-div')
    divGame.style.backgroundImage = `url('/assets/background/${Math.floor(Math.random() * max + 1)}.jpeg')`;
}