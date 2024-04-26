import { gerarCamposLogico, listaCamposLogicos } from "./campoLogico.js"
import { getAlturaTabuleiro, getLarguraTabuleiro } from "./size.js"

const tabuleiro = document.getElementById('tabuleiro') 

//Cria os botões em uma grid
export function gerarCampos(qtdColunas) {
    for (let i = 0; i < qtdColunas; i++) {
        for (let j = 0; j < qtdLinhas(qtdColunas); j++) {
            const button = document.createElement('button')
            button.className = 'botao'
            button.id = `${i + 1}-${j + 1}`
            tabuleiro.appendChild(button)
            gerarCamposLogico(i + 1, j + 1, false, false, false)
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