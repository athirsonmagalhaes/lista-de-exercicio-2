function somaMatriz(matriz) {
    let soma = 0
    matriz.forEach(n => n.forEach( num => {
        soma += num
    }))
    return soma
}

const numeros = [
    [1,2,3],
    [3,4],
]
console.log(somaMatriz(numeros));
