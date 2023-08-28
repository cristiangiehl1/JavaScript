function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        imagem.src = 'fotomanha.jpg'
        document.body.style.background = '#9c9a74'
        
    }
    else if (hora >= 12 && hora <= 18) {
        imagem.src = 'fototarde.jpg'
        document.body.style.background = '#f9b03d'
    }
    else {
        imagem.src = 'fotonoite.jpg'
        document.body.style.background = '#5e668d'
    }
}
