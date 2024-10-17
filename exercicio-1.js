function contarOcorrencias(vetor) {

    let frequencia = {}

    vetor.forEach(n => {
        if (frequencia[n]) {
            frequencia[n] += 1
        } else {
            frequencia[n] = 1
        }
    });

    return frequencia
};


const arrayDeNumeros = [1, 1, 4, 5, 5, 6, 1, 6, 6]
console.log(contarOcorrencias(arrayDeNumeros));
