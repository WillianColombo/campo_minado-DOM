import { listaCamposLogicos, marcarBomba, vizinhosCampo } from "./campoLogico.js"
import { gameWin } from "../elements/result.js"
import { campoAberto } from "../elements/ctrlElements.js"

//Gera as bombas em campos aleatórios até que atinja o número esperado
export function gerarBombas(porcentagemBombas) {
    const tamanhoTabuleiro = listaCamposLogicos.length
    const qtdBombas = parseInt(tamanhoTabuleiro * porcentagemBombas)

    let contBombas = 0

    while (contBombas < qtdBombas) {
        const posicaoLista = Math.floor(Math.random() * ((tamanhoTabuleiro - 1) - 0 + 1)) + 0
        const campo = listaCamposLogicos[posicaoLista]
        if (!campo.estaAberto) {
            marcarBomba(campo.posicaoX, campo.posicaoY)
            contBombas++
        }
    }
}

//Função que adiciona os campos adjacentes dentro da propriedade "vizinho"
export function adicionarVizinhos() {
    listaCamposLogicos.forEach(campo => campo.vizinho = vizinhosCampo(campo.posicaoX, campo.posicaoY))
}

//Relaciona os vizinhos com os campos, e faz a contagem de bombas
export function atualizarVizinhosBomba(listaCamposLogicos) {
    listaCamposLogicos.forEach(campo => {
        let cont = 0;
        if (!campo.temBomba) {
            campo.vizinho.forEach(vetor => {
                cont += vetor.filter(vizinho => vizinho && vizinho.temBomba === true).length;
            });
            campo.vizinhosBomba = campo.vizinhosBomba || 0;
            campo.vizinhosBomba += cont;
        }
    });
}

//Reseta visualmente os campos
export function resetCamposElementos() {
    const tabuleiro = document.getElementById("tabuleiro")
    tabuleiro.innerHTML = ''
}

//Função que confere se o jogo foi vencido
export function checkWin() {
    const teste = listaCamposLogicos.find(campo => !campo.temBomba && !campo.estaAberto)
    if (teste === undefined) {
        gameWin()
    }
}

//Função que deixa visivel todos os campos em caso de derrota, incluindo campos com ou sem bombas
export function abrirGameOver() {
    listaCamposLogicos.forEach(campo => {
        campo.estaAberto = true
        campoAberto(campo);
    })
}