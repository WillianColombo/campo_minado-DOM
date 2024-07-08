import { gerarCampos } from "/scripts/elements/campoElement.js"
import { ajusteDimensoesElementos } from "/scripts/elements/size.js"
import { adicionarVizinhos } from "../class/tabuleiro.js"
import { createDivs } from "../elements/createDivs.js"
import { createAppBar } from "../elements/appBarElement.js"
import { initStyleButton } from "../styles/campoStyle.js"

export function initGame(qtdColunas){
    createDivs()
    ajusteDimensoesElementos()
    gerarCampos(qtdColunas)
    initStyleButton()
    adicionarVizinhos()
    createAppBar()
}