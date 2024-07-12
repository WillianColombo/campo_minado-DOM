export function createSignature(){
    const signature = document.createElement('div')
    signature.className = 'signature'
    const name = document.createElement('p')
    const surname = document.createElement('p')
    name.className = 'signature-text'
    surname.className = 'signature-text'
    name.innerText = 'Willian'
    surname.innerText = 'Colombo'

    signature.append(name, surname)

    return signature
}

export function createGitHubLink(){
    const githubButton = document.createElement('button')
    githubButton.className = 'github-button'
    githubButton.addEventListener('click', function() {
        window.open('https://github.com/WillianColombo', '_blank')
    })
    return githubButton
}