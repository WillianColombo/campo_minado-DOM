//Lista que será adicionado os objetos Campo
export let listaCamposLogicos = []

//Gera o campo lógico referente ao campo da tela
export function gerarCamposLogico(posicaoX, posicaoY, temBomba, estaMarcado, estaAberto){
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
function acharCampo(posicaoX, posicaoY){
    try {
        return listaCamposLogicos.find(campo => campo.posicaoX === posicaoX && campo.posicaoY === posicaoY);
    } catch {
        return null
    }
}

//Marca a variável estaAberto 
export function abrirCampo(posicaoX, posicaoY){
acharCampo(posicaoX, posicaoY).estaAberto = true
}

export function marcarCampo(posicaoX, posicaoY){
    const campo = acharCampo(posicaoX, posicaoY)
    if(campo.estaMarcado === false) {
        campo.estaMarcado = true
    } else {
        campo.estaMarcado = false
    }
}

export function marcarBomba(posicaoX, posicaoY){
    acharCampo(posicaoX, posicaoY).temBomba = true
}

export function vizinhosCampo(posicaoX, posicaoY){
    const campoPrincipal = acharCampo(posicaoX, posicaoY)

    let vizinhos = [
        [acharCampo(posicaoX-1, posicaoY-1), acharCampo(posicaoX, posicaoY-1), acharCampo(posicaoX+1, posicaoY-1)],
        [acharCampo(posicaoX-1, posicaoY), acharCampo(posicaoX+1, posicaoY)],
        [acharCampo(posicaoX-1, posicaoY+1), acharCampo(posicaoX, posicaoY+1), acharCampo(posicaoX+1, posicaoY+1)]
    ]
    return vizinhos
}