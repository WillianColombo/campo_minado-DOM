
export function campoAberto(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    campoElement.innerText = campo.vizinhosBomba
    campoElement.disabled = true
}

export function campoMarcado(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    campoElement.innerText = "!"
}

export function campoDesmarcado(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    campoElement.innerText = ""
}