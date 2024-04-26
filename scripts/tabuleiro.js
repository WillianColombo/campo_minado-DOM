import {ajusteDimensoesElementos} from "./size.js"
import { gerarCampos } from "./campoElement.js"
import { listaCamposLogicos, marcarBomba } from "./campoLogico.js"

ajusteDimensoesElementos()
gerarCampos(70)
gerarBombas(0.3)

const qtdBombas = listaCamposLogicos.filter(campo => {
    return campo.temBomba === true
}).length

function gerarBombas(porcentagemBombas){
    listaCamposLogicos.forEach(campo => {
        const random = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        if(random < porcentagemBombas*100){
            marcarBomba(campo.posicaoX, campo.posicaoY)
        }
    })
}