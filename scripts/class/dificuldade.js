export function dificuldade(i){
    const pequeno = {
        qtdColunas: 30,
        porcBombas: 0.2
    }
    
    const medio = {
        qtdColunas: 43,
        porcBombas: 0.25
    }
    
    const grande = {
        qtdColunas: 56,
        porcBombas: 0.3
    }
    
    const gigante = {
        qtdColunas: 70,
        porcBombas: 0.35
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