import { imageButton, imageButtonDefeat } from "../styles/campoStyle.js"

export function campoAberto(campo, defeat = false){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    campoElement.disabled = true
    imageButton(campoElement, campo)
    if(defeat){
        imageButtonDefeat(campoElement, campo)
    }
}

export function campoMarcado(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    imageButton(campoElement, campo)
}

export function campoDesmarcado(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    imageButton(campoElement, campo)
}