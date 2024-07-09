import { gerarCamposLogico } from "/scripts/class/campoLogico.js"
import { campoClick, onRightClick } from "../gameController/gameEvents.js"
import { getAlturaTabuleiro, getLarguraTabuleiro } from "./size.js"

//Cria os botões em uma grid
export function gerarCampos(qtdColunas) {
    const tabuleiro = document.getElementById('tabuleiro') 
    for (let i = 0; i < qtdLinhas(qtdColunas); i++) {
        for (let j = 0; j < qtdColunas; j++) {
            const button = document.createElement('button')
            button.className = 'botao'
            button.id = `${j + 1}-${i + 1}`
            button.onclick = () => campoClick(j + 1, i + 1);
            button.oncontextmenu = (ev) => onRightClick(ev, j + 1, i + 1)
            tabuleiro.appendChild(button)
            gerarCamposLogico(j + 1, i + 1, false, false, false, false)
        }
    }
    styleButton(qtdColunas)
    tabuleiro.style.gridTemplateColumns = `repeat(${qtdColunas}, 1fr)`
    tabuleiro.style.gridTemplateRows = `repeat(${qtdLinhas}, 1fr)`
}

//Calcula a largura dos botões a partir da largura do tabuleiro e a quantidade pré estabelecida de colunas
function larguraButton(qtdColunas) {
    const larguraButton = getLarguraTabuleiro() / qtdColunas
    return larguraButton
}

//Calcula a quantidade de linhas a partir da altura do tabuleiro e largura dos botões já calculados
function qtdLinhas(qtdColunas) {
    const qtdLinhas = parseInt(getAlturaTabuleiro() / larguraButton(qtdColunas))
    return qtdLinhas
}

//Muda o tamanho dos botões
function styleButton(qtdColunas) {
    const classButton = document.querySelectorAll('.botao')
    classButton.forEach(botao => {
        botao.style.width = larguraButton(qtdColunas) + "px"
        botao.style.height = larguraButton(qtdColunas) + "px"
    })
}

