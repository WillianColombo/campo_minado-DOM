import { createRestartButton } from "/scripts/elements/appBarElement.js"
import { gerarCampos } from "/scripts/elements/campoElement.js"
import { listaCamposLogicos } from "../class/campoLogico.js"
import { ajusteDimensoesElementos } from "/scripts/elements/size.js"
import { atualizarVizinhosBomba, gerarBombas } from "../class/tabuleiro.js"

ajusteDimensoesElementos()
gerarCampos(50)
createRestartButton()
gerarBombas(0.2)
atualizarVizinhosBomba(listaCamposLogicos)

const qtdBombas = listaCamposLogicos.filter(campo => {
    return campo.temBomba === true
}).length