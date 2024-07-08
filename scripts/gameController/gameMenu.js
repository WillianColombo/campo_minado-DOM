import { dificuldade } from "../class/dificuldade.js"
import { buttonThemeInit, createChangeTheme } from "../elements/changeTheme.js"
import { gameMenuSize } from "../styles/gameMenuSize.js"
import { initGame } from "./gameInit.js"

buildMenu()

export let dificuldadeEscolhida = dificuldade(2)

export function buildMenu() {
    const body = document.querySelector('body')

    const divBody = document.createElement('div')
    divBody.id = 'div-body'

    const divOpcoes = document.createElement('div')
    divOpcoes.id = 'div-opcoes'

    const buttonStart = document.createElement('button')
    buttonStart.id = 'button-start'
    buttonStart.innerText = 'Iniciar Jogo'
    buttonStart.onclick = () => iniciarGame()



    const divDificuldade = document.createElement('div')
    divDificuldade.id = 'div-dificuldade'

    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    const button4 = document.createElement('button')

    button1.id = '1'
    button2.id = '2'
    button3.id = '3'
    button4.id = '4'

    button1.disabled = true

    button1.innerText = 'Pequeno'
    button2.innerText = 'Médio'
    button3.innerText = 'Grande'
    button4.innerText = 'Gigante'


    button1.onclick = () => mudarDificuldade(button1)
    button2.onclick = () => mudarDificuldade(button2)
    button3.onclick = () => mudarDificuldade(button3)
    button4.onclick = () => mudarDificuldade(button4)

    divDificuldade.append(button1, button2, button3, button4)
    const listaDificuldade = [button1, button2, button3, button4]

    const img = document.createElement('img')
    img.id = 'img-logo'
    img.src = '/assets/logo/logo-nome.png'

    //Importa os elementos na tela
    divOpcoes.append(img, buttonStart, divDificuldade, createChangeTheme())
    divBody.appendChild(divOpcoes)
    body.appendChild(divBody)
    buttonThemeInit()



    //Dificuldade escolhida, exportada para resetar dentro de game com as mesmas configurações. Inicia por padrão nessa escolha

    //Função chamada ao clicar no botão "Iniciar Jogo"
    function iniciarGame() {
        body.innerHTML = '' //Limpa a tela de menu
        initGame(dificuldadeEscolhida.qtdColunas, dificuldadeEscolhida.porcBombas) //Gera o jogo
    }

    //Replica um input radio em forma de botões
    function mudarDificuldade(button) {
        const oldButton = listaDificuldade.find(buttonLista => buttonLista.disabled === true)
        oldButton.disabled = false
        button.disabled = true

        dificuldadeEscolhida = dificuldade(parseInt(button.id))
    }

    gameMenuSize()
}