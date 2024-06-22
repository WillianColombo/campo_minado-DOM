//Verifica o estado do botão e atribui a ele uma imagem
/*export function imageButton(campoElement, campo) {
    if (campo.estaAberto && !campo.temBomba) {
        if (campo.vizinhosBomba === 0) {
            campoAbertoSemBomba(campoElement)
        } else {
            campoElement.innerText = campo.vizinhosBomba
            campoAbertoComBomba(campoElement)
        }
    } else if (!campo.estaAberto && campo.estaMarcado) {
        campoFlag(campoElement)
    } else if (!campo.estaAberto && !campo.estaMarcado) {
        campoFechado(campoElement)
    } else if (campo.estaAberto && campo.temBomba) {
        campoBomba0(campoElement)
    }
}*/

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

//Função chamada em caso de derrota, abre visualmente todos os campos não abertos
/*export function imageButtonDefeat(campoElement, campo) {
    if (!campo.estaAberto && campo.temBomba) {
        campoBomba1(campoElement)
    } else if (!campo.estaAberto && !campo.temBomba) {
        if (campo.vizinhosBomba === 0) {
            campoAbertoSemBomba(campoElement)
        } else {
            campoElement.innerText = campo.vizinhosBomba
            campoAbertoComBomba(campoElement)
        }
    }
}*/

//Percorre todos os elementos campos e adiciona o estilo inicial
/*export function initStyle() {
    const listaCamposElementos = document.querySelectorAll('.botao')
    listaCamposElementos.forEach(campo => campoFechado(campo))
}


const backgroundColor = '#B85639'
const borderColor = '#75331D'
const borderColorLigth = '#D2907A'

function campoFechado(campo) {
    while(campo.firstChild){
        campo.removeChild(campo.firstChild)
    }
    campo.style.padding = 0
    campo.style.backgroundColor = backgroundColor
    campo.style.borderTop = `${borderSizeFechado(campo)} solid ${borderColorLigth}`
    campo.style.borderLeft = `${borderSizeFechado(campo)} solid ${borderColorLigth}`
    campo.style.borderBottom = `${borderSizeFechado(campo)} solid ${borderColor}`
    campo.style.borderRight = `${borderSizeFechado(campo)} solid ${borderColor}`
}

function campoAbertoSemBomba(campo) {
    campo.style.backgroundColor = backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${borderColor}`
}

function campoAbertoComBomba(campo) {
    campo.style.padding = 0
    campo.style.backgroundColor = backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${borderColor}`
    campo.style.color = 'white'
    campo.style.fontFamily = "'Silkscreen', sans-serif"
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
    campo.style.fontSize = `${campo.offsetHeight * 0.9}px`
}

function campoFlag(campo) {
    const img = document.createElement('img')
    img.src = '/assets/images/bandeira.png'
    img.style.width = `${campo.offsetWidth * 0.5}px`
    img.style.height = `${campo.offsetHeight * 0.5}px`
    campo.appendChild(img)

    campo.style.padding = 0
    campo.style.backgroundColor = backgroundColor
    campo.style.borderTop = `${borderSizeFechado(campo)} solid ${borderColorLigth}`
    campo.style.borderLeft = `${borderSizeFechado(campo)} solid ${borderColorLigth}`
    campo.style.borderBottom = `${borderSizeFechado(campo)} solid ${borderColor}`
    campo.style.borderRight = `${borderSizeFechado(campo)} solid ${borderColor}`
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
}

function campoBomba0(campo) {
    const img = document.createElement('img')
    img.src = '/assets/images/bomba.png'
    img.style.width = `${campo.offsetWidth * 0.85}px`
    img.style.height = `${campo.offsetHeight * 0.85}px`
    campo.appendChild(img)

    campo.style.padding = 0
    campo.style.backgroundColor = 'red'
    campo.style.border = 0
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
}

function campoBomba1(campo) {
    const img = document.createElement('img')
    img.src = '/assets/images/bomba.png'
    img.style.width = `${campo.offsetWidth * 0.85}px`
    img.style.height = `${campo.offsetHeight * 0.85}px`
    campo.appendChild(img)

    campo.style.padding = 0
    campo.style.backgroundColor = backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${borderColor}`
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
}

function borderSizeFechado(campo) {
    return (campo.offsetWidth * 0.13) + "px"
}

function borderSizeAberto(campo) {
    return (campo.offsetWidth * 0.02) + "px"
}*/
