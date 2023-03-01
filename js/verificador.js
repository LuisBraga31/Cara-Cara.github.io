function teste (element) {
    
    let ocultar = document.getElementById(`${element.id}`)

    ocultar.classList.toggle('ativo');
    ocultar.classList.toggle('opacidade');
     
}

function virarTudo() {

    let virar = document.querySelectorAll('.ativo');
    let desvirar = document.querySelectorAll('.opacidade');

    for (let i = 0; i < virar.length; i++) {
        
        virar[i].classList.toggle('ativo');
        virar[i].classList.toggle('opacidade');
    
    }

    for (let i = 0; i < desvirar.length; i++) {
        
        desvirar[i].classList.toggle('ativo');
        desvirar[i].classList.toggle('opacidade');
    
    }

}