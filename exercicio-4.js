function ehPalindromo(string) {
    let str = string
    let stringReverse = str.split('').reverse().join('')
    if (stringReverse === str) {
        return 'É palindromo.';
    } else {
        return 'Não é palindromo.';
    }
}

let nome = 'bob'

console.log(ehPalindromo(nome));
