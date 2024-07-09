import { campoAberto, campoDesmarcado, campoDesmarcadoRisco, campoMarcado, campoMarcadoRisco } from "../elements/ctrlElements.js";
import { gameOver } from "../elements/result.js";
import { checkWin } from "./tabuleiro.js";

//Lista que será adicionado os objetos Campo
export let listaCamposLogicos = []

export function resetListaCamposLogicos() {
    listaCamposLogicos = []
}

//Gera o campo lógico referente ao campo da tela
export function gerarCamposLogico(posicaoX, posicaoY, temBomba, estaMarcado, estaAberto, estaMarcadoRisco) {
    let campoLogico = {
        posicaoX: posicaoX,
        posicaoY: posicaoY,
        temBomba: temBomba,
        estaMarcado: estaMarcado,
        estaAberto: estaAberto,
        estaMarcadoRisco: estaMarcadoRisco
    }
    
    listaCamposLogicos.push(campoLogico)
}

//Procura o campo referente a posição X e Y
export function acharCampo(posicaoX, posicaoY) {
    try {
        return listaCamposLogicos.find(campo => campo.posicaoX === posicaoX && campo.posicaoY === posicaoY);
    } catch {
        return null
    }
}

export function abrirCampo(posicaoX, posicaoY) {
    const campoInicial = acharCampo(posicaoX, posicaoY);
    const fila = [campoInicial];

    while (fila.length > 0) {
        const campo = fila.shift(); // Remove o primeiro campo da fila

        if (!campo.estaMarcado && !campo.estaAberto && !campo.estaMarcadoRisco) { //Verifica se o campo não está marcado e aberto
            if (!campo.temBomba) {
                campo.estaAberto = true; // Abre logicamente o campo
                campoAberto(campo); // Abre visualmente o campo

                if (campo.vizinhosBomba === 0) {
                    // Adiciona todos os vizinhos à fila
                    campo.vizinho.flatMap(vetorSecundario =>
                        vetorSecundario.forEach(vizinho => {
                            if (vizinho !== undefined && !vizinho.estaAberto) {
                                fila.push(vizinho);
                            }
                        })
                    );
                }
                checkWin();
            } else {
                campo.estaAberto = true; // Abre logicamente o campo
                campoAberto(campo);
                gameOver();
                return;
            }
        }
    }
}

export function marcarCampo(posicaoX, posicaoY) {
    const campo = acharCampo(posicaoX, posicaoY)
    if (campo.estaMarcado === false) {
        campo.estaMarcado = true
        campoMarcado(campo)
    } else {
        campo.estaMarcado = false
        campo.estaMarcadoRisco = false
        campoDesmarcado(campo)
    }
}

export function marcarCampoRisco(posicaoX, posicaoY) {
    const campo = acharCampo(posicaoX, posicaoY)
    if (!campo.estaMarcado && campo.estaMarcadoRisco === false) {
        campo.estaMarcadoRisco = true
        campoMarcadoRisco(campo)
    } else {
        campo.estaMarcadoRisco = false
        campoDesmarcadoRisco(campo)
    }
}

export function vizinhosCampo(posicaoX, posicaoY) {
    let vizinhos = [
        [acharCampo(posicaoX - 1, posicaoY - 1), acharCampo(posicaoX, posicaoY - 1), acharCampo(posicaoX + 1, posicaoY - 1)],
        [acharCampo(posicaoX - 1, posicaoY), acharCampo(posicaoX + 1, posicaoY)],
        [acharCampo(posicaoX - 1, posicaoY + 1), acharCampo(posicaoX, posicaoY + 1), acharCampo(posicaoX + 1, posicaoY + 1)]
    ]
    return vizinhos
}