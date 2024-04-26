import { ajusteDimensoesElementos } from "./size.js"
import { gerarCampos } from "./campoElement.js"
import { listaCamposLogicos, marcarBomba, vizinhosCampo } from "./campoLogico.js"

ajusteDimensoesElementos()
gerarCampos(70)
gerarBombas(0.3)

const qtdBombas = listaCamposLogicos.filter(campo => {
    return campo.temBomba === true
}).length

//Relaciona os vizinhos com os campos, e faz a contagem de bombas
listaCamposLogicos.forEach(campo => {
    let cont = 0
    if (!campo.temBomba) {
        campo.vizinho = vizinhosCampo(campo.posicaoX, campo.posicaoY)
        campo.vizinho.forEach(vetor => {
            cont += vetor.filter(vizinho => vizinho && vizinho.temBomba === true).length
        })
        campo.vizinhosBomba = campo.vizinhosBomba || 0;
        campo.vizinhosBomba += cont
    }
})

function gerarBombas(porcentagemBombas) {
    listaCamposLogicos.forEach(campo => {
        const random = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        if (random < porcentagemBombas * 100) {
            marcarBomba(campo.posicaoX, campo.posicaoY)
        }
    })
}


