import { themes } from "../elements/changeTheme.js";

export function initStyleButton() {
    const buttons = document.querySelectorAll('.botao')
    buttons.forEach(button => {
        button.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/fechado.jpg')`
    });
}

export function imageButton(campoElement, campo) {
    if (campo.estaAberto && !campo.temBomba) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/aberto_${campo.vizinhosBomba}.jpg`;
    } else if (!campo.estaAberto && campo.estaMarcado) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/bandeira.jpg')`;
    } else if (!campo.estaAberto && campo.estaMarcadoRisco) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/risco.jpg')`;
    }
    else if (!campo.estaAberto && !campo.estaMarcado) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/fechado.jpg')`;
    } else if (campo.estaAberto && campo.temBomba) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/bomba_0.jpg')`;
    }
}

export function imageButtonDefeat(campoElement, campo) {
    if (!campo.estaAberto && campo.temBomba) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/bomba_1.jpg')`;
    } else if (!campo.estaAberto && !campo.temBomba) {
        campoElement.style.backgroundImage = `url('/estilo_botoes/${getTheme()}_theme/aberto_${campo.vizinhosBomba}.jpg')`;
    }
}

function getTheme() {
    return themes.find(theme => theme.select).name
}