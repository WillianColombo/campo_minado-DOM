import { gerarCampos } from "/scripts/elements/campoElement.js"
import { adicionarVizinhos } from "../class/tabuleiro.js"
import { createAppbarDiv, createBoardDiv } from "../elements/createDivs.js"
import { createAppBar } from "../elements/appBarElement.js"
import { initStyleButton } from "../styles/campoStyle.js"

export function initGame(qtdColunas){
    const gameDiv = document.createElement('div')
    gameDiv.id = 'game-div'

    gameDiv.append(createAppbarDiv(), createBoardDiv())
    document.querySelector('body').appendChild(gameDiv)
    
    gerarCampos(qtdColunas)
    initStyleButton()
    adicionarVizinhos()
    createAppBar()
}