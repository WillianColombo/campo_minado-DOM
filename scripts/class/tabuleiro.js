import { gerarCampos } from "/scripts/elements/campoElement.js"
import { listaCamposLogicos, marcarBomba, resetListaCamposLogicos, vizinhosCampo } from "./campoLogico.js"
import { gameWin } from "../elements/result.js"

export function gerarBombas(porcentagemBombas) {
    listaCamposLogicos.forEach(campo => {
        const random = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        if (random < porcentagemBombas * 100) {
            marcarBomba(campo.posicaoX, campo.posicaoY)
        }
    })
}

//Relaciona os vizinhos com os campos, e faz a contagem de bombas
export function atualizarVizinhosBomba(listaCamposLogicos) {
    listaCamposLogicos.forEach(campo => {
        let cont = 0;
        if (!campo.temBomba) {
            campo.vizinho = vizinhosCampo(campo.posicaoX, campo.posicaoY);
            campo.vizinho.forEach(vetor => {
                cont += vetor.filter(vizinho => vizinho && vizinho.temBomba === true).length;
            });
            campo.vizinhosBomba = campo.vizinhosBomba || 0;
            campo.vizinhosBomba += cont;
        }
    });
}

function resetCamposElementos() {
    const tabuleiro = document.getElementById("tabuleiro")
    tabuleiro.innerHTML = ''
}

export function resetarTabuleiro() {
    resetListaCamposLogicos()
    resetCamposElementos()
    gerarCampos(70)
    gerarBombas(0.3)
    atualizarVizinhosBomba(listaCamposLogicos)
}

export function checkWin() {
    const teste = listaCamposLogicos.find(campo => !campo.temBomba && !campo.estaAberto)
    if (teste === undefined) {
        gameWin()
    }
}