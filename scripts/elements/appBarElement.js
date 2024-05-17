import { restartGame } from "../gameController/gameEvents.js"

export function createRestartButton(){
    const appBar = document.getElementById("app_bar")

    const restartButtom = document.createElement('button')
    restartButtom.innerText = "Reiniciar"
    restartButtom.onclick = () => restartGame()
    
    appBar.appendChild(restartButtom)
}