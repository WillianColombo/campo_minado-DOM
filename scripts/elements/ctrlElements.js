import { listaCamposAbertos, listaCamposMarcados } from "../class/ia.js"
import { desabilitarTabuleiro } from "../class/tabuleiro.js"
import { imageButton, imageButtonDefeat } from "../styles/campoStyle.js"
import { updateContFlag } from "./appBarElement.js"

export function campoAberto(campo, defeat = false){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    campoElement.disabled = true
    imageButton(campoElement, campo)

    //Verifica se este campo já não está adicionado na lista, pois a função primeiro click aciona várias vezes o mesmo campo
    const posicaoX = campo.posicaoX
    const posicaoY = campo.posicaoY
    if(!listaCamposAbertos.find(campo => campo.posicaoX === posicaoX && campo.posicaoY === posicaoY)){
        listaCamposAbertos.push(campo)
    } else return

    //Em caso de abrir um campo com mina, o parâmetro "defeat" recebe true e uma imagem diferente aparece neste exato campo para indicar onde resultou a derrota
    if(defeat){
        imageButtonDefeat(campoElement, campo)
    }
}

export function campoMarcado(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    imageButton(campoElement, campo)
    listaCamposMarcados.push(campo)
    updateContFlag(1)
}

export function campoDesmarcado(campo){
    const campoElement = document.getElementById(`${campo.posicaoX}-${campo.posicaoY}`)
    imageButton(campoElement, campo)
    updateContFlag(2)
}