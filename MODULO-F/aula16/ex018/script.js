// não pode adicionar valores repetidos na tabela
// os valores devem estar entre 1 e 100 
// se não adicionar ngm na tabela tem que retornar um alert para o usuário

let num = document.querySelector('input#txtn')
let tab = document.getElementById('flista')
let res = document.getElementById('res')
let arrayn = []

function addtab() {

    let n = Number(num.value) 
    
    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    }    
    else if (arrayn.includes(n)) {
        window.alert(`Valor já encontrado na lista`)
    }        
    else if (n < 1 || n > 100) {
        window.alert(`Valor inválido`) 
    }      
    else {
        arrayn.push(n);
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `tab${n}`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()              
}

function resultado() {
    
    if (arrayn.length == 0) {
        window.alert(`Adicione valores antes de finalizar.`)
    }
    else {
        let total = 0
        for (let i in arrayn) {
            total += arrayn[i]
        }
        
        let media = total / arrayn.length
        
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${arrayn.length} números cadastrados.<br>`
        res.innerHTML += `<br>O maior valor informado foi ${arrayn.sort()[arrayn.length - 1]}.<br>`
        res.innerHTML += `<br>O menor valor informado foi ${arrayn.sort()[0]}.<br>`
        res.innerHTML += `<br>Somando todos os valores temos ${total}.<br>`
        res.innerHTML += `<br>A média dos valores digitados é ${media}.<br>`
    }
}





    


    // window.alert('Favor digitar um número válido!')
    
    
    
    
    
   
    
    

