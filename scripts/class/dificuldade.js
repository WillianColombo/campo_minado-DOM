export function dificuldade(i){
    const pequeno = {
        qtdColunas: 20,
        porcBombas: 0.1
    }
    
    const medio = {
        qtdColunas: 30,
        porcBombas: 0.2
    }
    
    const grande = {
        qtdColunas: 40,
        porcBombas: 0.25
    }
    
    const gigante = {
        qtdColunas: 50,
        porcBombas: 0.3
    }
    switch(i){
        case 1:
            return pequeno
        case 2:
            return medio
        case 3: 
            return grande
        case 4: 
            return gigante
    }
}