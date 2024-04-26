//Obter dimensões da tela
const larguraWindow = window.innerWidth
const alturaWindow = window.innerHeight

export function getAlturaTabuleiro(){
    const alturaTabuleiro = (alturaWindow * 0.81)
    return alturaTabuleiro
}

export function getLarguraTabuleiro(){
    const larguraTabuleiro = (larguraWindow * 0.97)
    return larguraTabuleiro
}

export function ajusteDimensoesElementos() {
    //Obter os elementos
    const tabuleiro = document.getElementById('tabuleiro')
    const appBar = document.getElementById('app_bar')

    //Ajustando dimensões do tabuleiro
    tabuleiro.style.width = getLarguraTabuleiro() + "px"
    tabuleiro.style.height = getAlturaTabuleiro() + "px"

    //Ajustando dimensões da AppBar
    const larguraAppBar = (larguraWindow * 0.97)
    const alturaAppBar = (alturaWindow * 0.1)
    appBar.style.width = larguraAppBar + "px"
    appBar.style.height = alturaAppBar + "px"

    //Ajustando espaçamento entre elementos na tela
    appBar.style.marginTop = (alturaWindow * 0.03) + "px"
    tabuleiro.style.marginTop = (alturaWindow * 0.03) + "px"
}