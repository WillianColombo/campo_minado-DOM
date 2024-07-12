import { checkDifficulty, createChangeDifficulty } from "../elements/changeDifficulty.js"
import { createChangeTheme } from "../elements/changeTheme.js"
import { createGitHubLink, createSignature } from "../elements/signature.js"
import { menuTheme } from "../styles/menuTheme.js"
import { initGame } from "./gameInit.js"

buildMenu()

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

    const divLogo = document.createElement('div')
    divLogo.id = 'logo-div'
    const divName = document.createElement('div')
    divName.id = 'name-div'
    divName.innerText = 'CONDOMINE'
    const divSlogan = document.createElement('div')
    divSlogan.id = 'slogan-div'
    divSlogan.innerText = "Your George's game"
    const hr = document.createElement('hr')
    divLogo.append(divName, hr, divSlogan)

    //Importa os elementos na tela
    divOpcoes.append(divLogo, buttonStart)
    divBody.append(topDivMenu(), divOpcoes, bottomDivMenu())
    body.appendChild(divBody)



    //Dificuldade escolhida, exportada para resetar dentro de game com as mesmas configurações. Inicia por padrão nessa escolha

    //Função chamada ao clicar no botão "Iniciar Jogo"
    function iniciarGame() {
        body.innerHTML = '' //Limpa a tela de menu
        initGame(checkDifficulty().qtdColunas, checkDifficulty().porcBombas) //Gera o jogo
    }

    randomBackground(3)
    menuTheme()
}

//Escolhe aleatoriamente o background do menu
function randomBackground(max){
    const divBody = document.getElementById('div-body')
    divBody.style.backgroundImage = `url('/assets/background/${Math.floor(Math.random() * max + 1)}.jpeg')`;
}

//Gera a div superior para opções
function topDivMenu(){
    const topDiv = document.createElement('div')
    topDiv.className = 'top-div'

    topDiv.append(createChangeDifficulty(), createChangeTheme())

    return topDiv
}

function bottomDivMenu(){
    const bottomDiv = document.createElement('div')
    bottomDiv.className = 'bottom-div'

    bottomDiv.append(createSignature(), createGitHubLink())

    return bottomDiv
}

