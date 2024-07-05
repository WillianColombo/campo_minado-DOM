// export function imageButton(campoElement, campo) {
//     if (campo.estaAberto && !campo.temBomba) {
//         campoElement.style.backgroundImage = `url('/assets/images/aberto_${campo.vizinhosBomba}.png')`;
//     } else if (!campo.estaAberto && campo.estaMarcado) {
//         campoElement.style.backgroundImage = "url('/assets/images/bandeira.png')";
//     } else if (!campo.estaAberto && !campo.estaMarcado) {
//         campoElement.style.backgroundImage = "url('/assets/images/fechado.png')";
//     } else if (campo.estaAberto && campo.temBomba) {
//         campoElement.style.backgroundImage = "url('/assets/images/bomba_0.png')";
//     } 
// }

// export function imageButtonDefeat(campoElement, campo){
//     if(!campo.estaAberto && campo.temBomba){
//         campoElement.style.backgroundImage = "url('/assets/images/bomba_1.png')";
//     } else if(!campo.estaAberto && !campo.temBomba) {
//         campoElement.style.backgroundImage = `url('/assets/images/aberto_${campo.vizinhosBomba}.png')`;
//     }
// }

export function initStyleButton(){
    const buttons = document.querySelectorAll('.botao')
    buttons.forEach(button => {
        button.style.backgroundImage = "url('/estilo_botoes/green_theme/fechado.jpg')"
    });
}

export function imageButton(campoElement, campo) {
    if (campo.estaAberto && !campo.temBomba) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/green_theme/aberto_${campo.vizinhosBomba}.jpg`;
    } else if (!campo.estaAberto && campo.estaMarcado) {
        campoElement.style.backgroundImage = "url('/estilo_botoes/green_theme/bandeira.jpg')";
    } else if (!campo.estaAberto && !campo.estaMarcado) {
        campoElement.style.backgroundImage = "url('/estilo_botoes/green_theme/fechado.jpg')";
    } else if (campo.estaAberto && campo.temBomba) {
        campoElement.style.backgroundImage = "url('/estilo_botoes/green_theme/bomba_0.jpg')";
    } 
}

export function imageButtonDefeat(campoElement, campo){
    if(!campo.estaAberto && campo.temBomba){
        campoElement.style.backgroundImage = "url('/estilo_botoes/green_theme/bomba_1.jpg')";
    } else if(!campo.estaAberto && !campo.temBomba) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/green_theme/aberto_${campo.vizinhosBomba}.jpg')`;
    }
}