const pessoas = [
    {
        nome: "Maria",
        idade: 18
    },
    {
        nome: "Jorge",
        idade: 50
    },
    {
        nome: "Paula",
        idade: 16
    }
]

function ordenarPorIdade(vetor) {
    vetor.sort(function (a, b) {
        return a.idade - b.idade
    })
}

ordenarPorIdade(pessoas)

console.log(pessoas);

