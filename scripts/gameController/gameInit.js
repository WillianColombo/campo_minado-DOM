import { createRestartButton } from "/scripts/elements/appBarElement.js"
import { gerarCampos } from "/scripts/elements/campoElement.js"
import { listaCamposLogicos } from "../class/campoLogico.js"
import { ajusteDimensoesElementos } from "/scripts/elements/size.js"
import { adicionarVizinhos, atualizarVizinhosBomba, gerarBombas } from "../class/tabuleiro.js"
import { createDivs } from "../elements/createDivs.js"

export function initGame(qtdColunas){
    createDivs()
    ajusteDimensoesElementos()
    gerarCampos(qtdColunas)
    adicionarVizinhos()
    createRestartButton()
}

const qtdBombas = listaCamposLogicos.filter(campo => {
    return campo.temBomba === true
}).length