function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebemasculino.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jovemmasculino.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'adultomasculino.jpg')
            }
            else {
                img.setAttribute('src', 'idosomasculino.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebefeminino.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jovemfeminino.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'adultofeminino.jpg')
            }
            else {
                img.setAttribute('src', 'idosofeminino.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}