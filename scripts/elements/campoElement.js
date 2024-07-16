import { gerarCamposLogico } from "/scripts/class/campoLogico.js"
import { campoClick, onRightClick } from "../gameController/gameEvents.js"
import { checkDifficulty } from "./changeDifficulty.js"

//Cria os botões em uma grid
export function gerarCampos() {
    const tabuleiro = document.getElementById('tabuleiro') 
    for (let i = 0; i < qtdLinhas(checkDifficulty().qtdColunas); i++) {
        for (let j = 0; j < checkDifficulty().qtdColunas; j++) {
            const button = document.createElement('button')
            button.className = 'botao'
            button.id = `${j + 1}-${i + 1}`
            button.onclick = () => campoClick(j + 1, i + 1);
            button.oncontextmenu = (ev) => onRightClick(ev, j + 1, i + 1)
            tabuleiro.appendChild(button)
            gerarCamposLogico(j + 1, i + 1, false, false, false, false)
        }
    }
    styleButton()
    tabuleiro.style.gridTemplateColumns = `repeat(${checkDifficulty().qtdColunas}, 1fr)`
    tabuleiro.style.gridTemplateRows = `repeat(${qtdLinhas}, 1fr)`
}

//Calcula a largura dos botões a partir da largura do tabuleiro e a quantidade pré estabelecida de colunas
function larguraButton() {
    const widthBoard = document.getElementById('tabuleiro').offsetWidth
    const larguraButton = widthBoard / checkDifficulty().qtdColunas
    return larguraButton
}

//Calcula a quantidade de linhas a partir da altura do tabuleiro e largura dos botões já calculados
function qtdLinhas() {
    const heightBoard = document.getElementById('tabuleiro').offsetHeight
    const qtdLinhas = parseInt(heightBoard / larguraButton())
    return qtdLinhas
}

//Muda o tamanho dos botões
function styleButton() {
    const classButton = document.querySelectorAll('.botao')
    classButton.forEach(botao => {
        botao.style.width = larguraButton() + "px"
        botao.style.height = larguraButton() + "px"
    })
}

