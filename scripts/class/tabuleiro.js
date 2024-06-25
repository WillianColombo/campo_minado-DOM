import { listaCamposLogicos, vizinhosCampo } from "./campoLogico.js"
import { gameWin } from "../elements/result.js"
import { campoAberto } from "../elements/ctrlElements.js"

//Gera as bombas em campos aleatórios até que atinja o número esperado
export function gerarBombas(porcentagemBombas) {
    const tamanhoTabuleiro = listaCamposLogicos.length

    let contBombas = listaCamposLogicos.filter(campos => campos.temBomba).length    

    while (contBombas < parseInt(tamanhoTabuleiro * porcentagemBombas)) {
        const posicaoLista = Math.floor(Math.random() * tamanhoTabuleiro)
        const campo = listaCamposLogicos[posicaoLista]
        if (!campo.estaAberto) {
            campo.temBomba = true
            contBombas = listaCamposLogicos.filter(campos => campos.temBomba).length
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

//Desabilita o tabuleiro em caso de derrota
export function desabilitarTabuleiro(){
    let listaBotoes = document.querySelectorAll('.botao')
    listaBotoes.disabled = true
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
        const defeat = true
        campoAberto(campo, defeat);
    })
}