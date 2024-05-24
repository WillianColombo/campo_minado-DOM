export function createDivs(){
    const body = document.querySelector("body")

    const appBar = document.createElement('div')
    appBar.id = "app_bar"
    const tabuleiro = document.createElement("div")
    tabuleiro.id = "tabuleiro"

    body.append(appBar, tabuleiro)
}