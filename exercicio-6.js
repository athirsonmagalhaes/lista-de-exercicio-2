function substituirElemento(vetor, vAntigo, vNovo) {
    return vetor.map(item => (item === vAntigo ? vNovo : item))
}

const array = [1,3,4,4,6,7,8]
const array2 = substituirElemento(array, 4, 5)

console.log(array2);
