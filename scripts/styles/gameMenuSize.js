export function gameMenuSize() {
    const divOpcoes = document.getElementById('div-opcoes')
    divOpcoes.style.width = (window.innerWidth * 0.3) + "px"
    divOpcoes.style.marginTop = ((window.innerHeight - divOpcoes.clientHeight) / 5) + "px"
}