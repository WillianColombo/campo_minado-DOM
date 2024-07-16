import { elementsTheme } from "./elementsTheme.js"

export function menuTheme() {
    const listButtonStyles = [
        document.getElementById('difficulty-button'),
        document.getElementById('theme-button'),
        document.getElementById('button-start'),
        document.getElementById('container-theme-div'),
        document.getElementById('container-difficulty-div'),
    ]

    elementsTheme(listButtonStyles)
}