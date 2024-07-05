const campo = document.getElementById('teste')

const brown = {
    backgroundColor: '#B85639',
    borderColor: '#75331D',
    borderColorLigth: '#D2907A'
}

const dark = {
    backgroundColor: '#393437',
    borderColor: '#1b1619',
    borderColorLigth: '#575154'
}

const ligth = {
    backgroundColor: '#dfdde6',
    borderColor: '#bebbcd',
    borderColorLigth: '#ffffff'
}

const green = {
    backgroundColor: '#1ab668',
    borderColor: '#009046',
    borderColorLigth: '#33dc8a'
}

campoFechado()


function campoFechado() {
    campo.style.padding = 0
    campo.style.backgroundColor = green.backgroundColor
    campo.style.borderTop = `${borderSizeFechado(campo)} solid ${green.borderColorLigth}`
    campo.style.borderLeft = `${borderSizeFechado(campo)} solid ${green.borderColorLigth}`
    campo.style.borderBottom = `${borderSizeFechado(campo)} solid ${green.borderColor}`
    campo.style.borderRight = `${borderSizeFechado(campo)} solid ${green.borderColor}`
}

function campoAbertoSemBomba() {
    campo.style.backgroundColor = green.backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${green.borderColor}`
}

function campoAbertoComBomba() {
    campo.style.padding = 0
    campo.style.paddingBottom = '08%'
    campo.style.backgroundColor = green.backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${green.borderColor}`
    campo.style.color = '#ffffff'
    campo.style.fontFamily = "'Silkscreen', sans-serif"
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
    campo.style.fontSize = `${campo.offsetHeight * 0.9}px`
    campo.innerText = 8
}

function campoFlag() {
    const img = document.createElement('img')
    img.src = './bandeira.png'
    img.style.width = `${campo.offsetWidth * 0.5}px`
    img.style.height = `${campo.offsetHeight * 0.5}px`
    campo.appendChild(img)

    campo.style.padding = 0
    campo.style.backgroundColor = green.backgroundColor
    campo.style.borderTop = `${borderSizeFechado(campo)} solid ${green.borderColorLigth}`
    campo.style.borderLeft = `${borderSizeFechado(campo)} solid ${green.borderColorLigth}`
    campo.style.borderBottom = `${borderSizeFechado(campo)} solid ${green.borderColor}`
    campo.style.borderRight = `${borderSizeFechado(campo)} solid ${green.borderColor}`
    campo.style.display = 'flex'
    campo.style.justifyContent = 'center'
    campo.style.alignItems = 'center'
}

function campoBomba0() {
    const img = document.createElement('img')
    img.src = './bomba.png'
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
    img.src = './bomba.png'
    img.style.width = `${campo.offsetWidth * 0.85}px`
    img.style.height = `${campo.offsetHeight * 0.85}px`
    campo.appendChild(img)

    campo.style.padding = 0
    campo.style.backgroundColor = green.backgroundColor
    campo.style.border = `${borderSizeAberto(campo)} solid ${green.borderColor}`
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
