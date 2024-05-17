export function createFloatDiv(conteudo){
    const floatDiv = document.createElement('div')
    floatDiv.id = "float-div"
    floatDiv.innerHTML = conteudo.title

    const overlay = document.createElement('div')
    overlay.id = 'overlay-div'

    abrirFlutuante(floatDiv, overlay)

    const body = document.querySelector("body")
    body.append(floatDiv, overlay)
}

function abrirFlutuante(floatDiv, overlay) {
    floatDiv.style.display = 'block';
    overlay.style.display = 'block';
}

function fecharFlutuante(floatDiv, overlay) {
    floatDiv.style.display = 'none';
    overlay.style.display = 'none';
}

export function gameWin() {
    const win = {
        title: "Parabéns, você venceu o jogo!"
    }

    createFloatDiv(win)
}

export function gameOver() {
    const defeat = {
        title: "GameOver, tente novamente!"
    }

    createFloatDiv(defeat)
}