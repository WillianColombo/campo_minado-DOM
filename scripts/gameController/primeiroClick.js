import { acharCampo, listaCamposLogicos } from "../class/campoLogico.js"
import { atualizarVizinhosBomba, gerarBombas } from "../class/tabuleiro.js"
import { campoAberto } from "../elements/ctrlElements.js"
import { dificuldadeEscolhida } from "./gameMenu.js"

export function primeiroClick(posicaoX, posicaoY) {
    const campoInicial = acharCampo(posicaoX, posicaoY) //Campo que foi iniciado
    let camposIniciaisParaAbrir = [] //Campo inicial + adjacentes
    let camposParaAbrirSequencial = [] //Campos que poderão ser abertos em sequencia, após colocar as bombas

    //Adiciona o campo inicial e os adjacentes na lista
    camposIniciaisParaAbrir = campoInicial.vizinho.flatMap(vetorSecundario =>
        vetorSecundario).flatMap(vetorTerceiro => vetorTerceiro).filter(campo => campo)
    camposParaAbrirSequencial = [...camposIniciaisParaAbrir]
    camposIniciaisParaAbrir.push(campoInicial)

    //Abre os campos iniciais
    while (camposIniciaisParaAbrir.length > 0) {
        const campo = camposIniciaisParaAbrir.shift()
        campo.vizinhosBomba = 0
        campo.estaAberto = true;
        campoAberto(campo, false, true);
    }

    gerarBombas(dificuldadeEscolhida.porcBombas) //Gera as bombas no tabuleiro após a abertura inicial
    atualizarVizinhosBomba(listaCamposLogicos) //Atualiza a contagem de bombas nos vizinhos

    //Verifica e abre sequencialmente os campos perto dos iniciais
    while (camposParaAbrirSequencial.length > 0) {
        const campo = camposParaAbrirSequencial.shift()

        if (!campo.temBomba) {
            campo.estaAberto = true; // Abre logicamente o campo
            campoAberto(campo);

            if (campo.vizinhosBomba === 0) {
                // Adiciona todos os vizinhos à fila
                campo.vizinho.flatMap(vetorSecundario =>
                    vetorSecundario.forEach(vizinho => {
                        if (vizinho !== undefined && !vizinho.estaAberto) {
                            camposParaAbrirSequencial.push(vizinho);
                        }
                    })
                );
            }
        }
    }
}