export function imageButton(campoElement, campo) {
    if (campo.estaAberto && !campo.temBomba) {
        campoElement.style.backgroundImage = `url('/assets/images/aberto_${campo.vizinhosBomba}.png')`;
    } else if (!campo.estaAberto && campo.estaMarcado) {
        campoElement.style.backgroundImage = "url('/assets/images/bandeira.png')";
    } else if (!campo.estaAberto && !campo.estaMarcado) {
        campoElement.style.backgroundImage = "url('/assets/images/fechado.png')";
    } else if (campo.estaAberto && campo.temBomba) {
        campoElement.style.backgroundImage = "url('/assets/images/bomba_0.png')";
    } 
}

export function imageButtonDefeat(campoElement, campo){
    if(!campo.estaAberto && campo.temBomba){
        campoElement.style.backgroundImage = "url('/assets/images/bomba_1.png')";
    } else if(!campo.estaAberto && !campo.temBomba) {
        campoElement.style.backgroundImage = `url('/assets/images/aberto_${campo.vizinhosBomba}.png')`;
    }
}