let num = [5, 8, 4]

console.log(`1º Console log: nosso vetor é o ${num}`)

num[3] = 6

console.log(`2º Console log: nosso novo vetor é o ${num}`)

// Adiciona um número automaticamente ao final do vetor
num.push(7)

console.log(`3º Console log: nosso novo vetor final é o ${num}`)

// Verifica o tamanho do vetor
console.log(`4º Console log: o tamanho do vetor é ${num.length}`)

// Coloca o elementos em ordem
num.sort()

console.log(`5º Console log: nosso vetor ordenado fica ${num}`)

console.log(`6º Console log: o primeiro elemento do vertor ordenado é ${num[0]}`)

console.log(``)

// Loop para imprimir todos os valores do array com uma formatação especifica
// Lembrando que o array foi ordenado no comando anterior
console.log(`7º Console log`)
for (let i = 0; i < num.length; i++) {
    console.log(`num[${i}] = ${num[i]}`)
}

console.log(``)

console.log(`8º Console log`)
// também pode ser feita com o loop 'for in'
for (let i in num) {
    console.log(`num[${i}] = ${num[i]}`)
}

console.log(``)

// Retorna a posição de determinado número dentro do vetor
// Se não possuir número retornará '-1'
console.log(`9º Console log: o valor 7 está na posição ${num.indexOf(7)}`)
console.log(`10º Console log: o valor 19 está na posição ${num.indexOf(19)}`)


let test = [5, 8, 4, 4, 6, 8, 10, 5, 2, 4]

for (let k = 0; k < test.length; k++) {    
    for (let j = k + 1; j <= test.length - 1; j++) {
        if (test[k] == test[j]) {
            console.log(`Array[${k}]: ${test[k]} = Array[${j}]: ${test[j]}`)
        }
    }
}