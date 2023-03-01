function teste (element) {
    
    let ocultar = document.getElementById(`${element.id}`)
    console.log(ocultar);

    ocultar.classList.toggle('ativo');
    ocultar.classList.toggle('opacidade');

     
}

