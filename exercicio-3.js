function separarParesImpares(vetor){
    let parImpar = {
        pares: [],
        impares:[]
    }
    vetor.forEach(n => {
        if (n % 2 === 0) {
            parImpar.pares.push(n)
        } else {
            parImpar.impares.push(n)
        }
    });
    return parImpar
}

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(separarParesImpares(numeros));
