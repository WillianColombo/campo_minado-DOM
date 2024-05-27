import { dificuldade } from "../class/dificuldade.js"
import { initGame } from "./gameInit.js"

const body = document.querySelector('body')

const divOpcoes = document.createElement('div')
divOpcoes.id = 'div-opcoes'

const buttonStart = document.createElement('button')
buttonStart.id = 'button-start'
buttonStart.innerText = 'Iniciar Jogo'
buttonStart.onclick = () => iniciarGame()


//Cria e configura as radios para selecionar a dificuldade
const divRadio = document.createElement('div')
divRadio.id = "div-radio"

const radio1 = document.createElement('input')
const radio2 = document.createElement('input')
const radio3 = document.createElement('input')
const radio4 = document.createElement('input')
const label1 = document.createElement('label')
const label2 = document.createElement('label')
const label3 = document.createElement('label')
const label4 = document.createElement('label')

radio1.type = 'radio'
radio1.name = 'dificuldade'
radio1.value = '1'
radio2.type = 'radio'
radio2.name = 'dificuldade'
radio2.value = '2'
radio2.checked = true
radio3.type = 'radio'
radio3.name = 'dificuldade'
radio3.value = '3'
radio4.type = 'radio'
radio4.name = 'dificuldade'
radio4.value = '4'

label1.innerText = "Pequeno"
label2.innerText = "Médio"
label3.innerText = "Grande"
label4.innerText = "Gigante"

label1.appendChild(radio1)
label2.appendChild(radio2)
label3.appendChild(radio3)
label4.appendChild(radio4)

divRadio.append(label1, label2, label3, label4)



//Importa os elementos na tela
divOpcoes.append(buttonStart, divRadio)
body.appendChild(divOpcoes)



//Dificuldade escolhida, exportada para resetar dentro de game com as mesmas configurações
export let dificuldadeEscolhida = ''

//Função chamada ao clicar no botão "Iniciar Jogo"
function iniciarGame(){
    dificuldadeEscolhida = opcaoRadio() //Obtém a quantidade de colunas e porcentagem de bombas, através do input radio
    body.innerHTML = '' //Limpa a tela de menu
    initGame(dificuldadeEscolhida.qtdColunas, dificuldadeEscolhida.porcBombas) //Gera o jogo
}

//Retorna a opção de dificuldade, a partir da radio selecionada no menu
function opcaoRadio(){
    return dificuldade(parseInt(document.querySelector('input[name="dificuldade"]:checked').value))
}