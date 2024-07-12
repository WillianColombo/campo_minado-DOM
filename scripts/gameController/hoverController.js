import { checkTheme } from "../elements/changeTheme.js"

//Hover Difficulty Button
document.getElementById('difficulty-button').addEventListener('mouseenter', function(){
    this.style.backgroundColor = checkTheme().borderColorLigth
})
document.getElementById('difficulty-button').addEventListener('mouseleave', function(){
    this.style.backgroundColor = checkTheme().backgroundColor
})


//Hover Theme Button
document.getElementById('theme-button').addEventListener('mouseenter', function(){
    this.style.backgroundColor = checkTheme().borderColorLigth
})
document.getElementById('theme-button').addEventListener('mouseleave', function(){
    this.style.backgroundColor = checkTheme().backgroundColor
})


//Hover Start Button
document.getElementById('button-start').addEventListener('mouseenter', function(){
    this.style.backgroundColor = checkTheme().borderColorLigth
})
document.getElementById('button-start').addEventListener('mouseleave', function(){
    this.style.backgroundColor = checkTheme().backgroundColor
})