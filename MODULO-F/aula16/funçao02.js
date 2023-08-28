
// podemos deixar os parâmetros pré-definidos usando um sinal de '='
// Nessa função caso a chamada da função omita um número a ele será atribuido o valor 0
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2, 5))

console.log(soma(2))