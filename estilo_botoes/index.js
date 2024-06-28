const campo = document.getElementById('teste')
const backgroundColor = '#B85639'
const borderColor = '#75331D'
const borderColorLigth = '#D2907A'

campoBomba1()


function campoFechado() {
    campo.style.padding = 0
    campo.style.backgroundColor = backgroundColor
    campo.style.borderTop = `${borderSizeFechado(campo)} solid ${borderColorLigth}`
    campo.style.borderLeft = `${borderSizeFechado(campo)} solid ${borderColorLigth}`
    campo.style.borderBottom = `${borderSizeFechado(campo)} solid ${borderColor}`
    campo.style.borderRight = `${borderSizeFechado(campo)} solid ${borderColor}`
}

function campoAbertoSemBomba() {
    campo.style.backgroundColor = backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${borderColor}`
}

function campoAbertoComBomba() {
    campo.style.padding = 0
    campo.style.backgroundColor = backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${borderColor}`
    campo.style.color = 'white'
    campo.style.fontFamily = "'Pixelify Sans', sans-serif"
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
    campo.style.fontSize = `${campo.offsetHeight * 0.9}px`
}

function campoFlag() {
    const img = document.createElement('img')
    img.src = '/bandeira.png'
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

function campoBomba0() {
    const img = document.createElement('img')
    img.src = '/bomba.png'
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

function campoBomba1() {
    const img = document.createElement('img')
    img.src = '/bomba.png'
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
}
