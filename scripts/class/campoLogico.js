import { campoAberto, campoDesmarcado, campoMarcado } from "../elements/ctrlElements.js";
import { gameOver } from "../elements/result.js";
import { checkWin } from "./tabuleiro.js";

//Lista que será adicionado os objetos Campo
export let listaCamposLogicos = []

export function resetListaCamposLogicos(){
    listaCamposLogicos = []
}

//Gera o campo lógico referente ao campo da tela
export function gerarCamposLogico(posicaoX, posicaoY, temBomba, estaMarcado, estaAberto) {
    let campoLogico = {
        posicaoX: posicaoX,
        posicaoY: posicaoY,
        temBomba: temBomba,
        estaMarcado: estaMarcado,
        estaAberto: estaAberto
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

//Marca a variável estaAberto 
export function abrirCampo(posicaoX, posicaoY) {
    const campo = acharCampo(posicaoX, posicaoY)
    if (!campo.estaMarcado) {
        if (!campo.temBomba) {
            campo.estaAberto = true
            campoAberto(campo)
            if(campo.vizinhosCampo === 0){
                campo.vizinho.flatMap(vetorUnico => vetorUnico).forEach(vizinho => {
                    abrirCampo(vizinho.posicaoX, vizinho.posicaoY)
                });
            }
            //aberturaSequencial(campo)
            checkWin()
        } else {
            gameOver()
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
        campoDesmarcado(campo)
    }
}

export function marcarBomba(posicaoX, posicaoY) {
    acharCampo(posicaoX, posicaoY).temBomba = true
}

export function vizinhosCampo(posicaoX, posicaoY) {
    let vizinhos = [
        [acharCampo(posicaoX - 1, posicaoY - 1), acharCampo(posicaoX, posicaoY - 1), acharCampo(posicaoX + 1, posicaoY - 1)],
        [acharCampo(posicaoX - 1, posicaoY), acharCampo(posicaoX + 1, posicaoY)],
        [acharCampo(posicaoX - 1, posicaoY + 1), acharCampo(posicaoX, posicaoY + 1), acharCampo(posicaoX + 1, posicaoY + 1)]
    ]
    return vizinhos
}