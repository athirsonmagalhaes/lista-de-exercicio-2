function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;
    const resultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = soma;
        }
    }

    return resultado;
}

const matrizA = [
    [4,2],
    [7,9]
]
const matrizB = [
    [2,1],
    [3,2]
]

console.log(multiplicarMatrizes(matrizA,matrizB));