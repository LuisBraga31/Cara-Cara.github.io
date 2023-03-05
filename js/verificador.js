function teste (element) {
    
    let ocultar = document.getElementById(`${element.id}`)

    ocultar.classList.toggle('ativo');
    ocultar.classList.toggle('opacidade');
     
}

function virarTudo() {
    
    let cartas = document.querySelectorAll('.card img');
    let armazenamento = [];
 
    for (let i=0; i < cartas.length; i++) {

        if(cartas[i].classList.contains('opacidade')) {

            armazenamento.push(cartas[i].classList.contains('opacidade'));
        } else {
            cartas[i].classList.toggle('ativo');
            cartas[i].classList.toggle('opacidade');
        }

    }

    let qtdArmazenado = armazenamento.length;
    
    if(qtdArmazenado == 20) {
        for(let j = 0;  j < cartas.length; j++) {

            cartas[j].classList.toggle('ativo');
            cartas[j].classList.toggle('opacidade');
        }        
    }

}

