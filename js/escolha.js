let image = document.getElementById('imagem');
let seletor = document.getElementById('seletor');

function escolhaCard() {

    const imagens = [
        {
            nome: 'Anitta',
            imagem: 'img/cards/anitta.JPG'
        },
        {
            nome: 'Bruna Marquezine',
            imagem: 'img/cards/brunamarquezine.JPG'
        },
        {
            nome: 'Casimiro',
            imagem: 'img/cards/casimiro.JPG'
        },
        {
            nome: 'Danilo Gentilli',
            imagem: 'img/cards/danilo.JPG'
        },
        {
            nome: 'Gisele Bündchen',
            imagem: 'img/cards/gisele.JPG'
        },
        {
            nome: 'Ivete Sangalo',
            imagem: 'img/cards/ivete.JPG'
        },
        {
            nome: 'Iza',
            imagem: 'img/cards/iza.JPG'
        },
        {
            nome: 'Larissa Manoela',
            imagem: 'img/cards/larissa_manoela.JPG'
        },
        {
            nome: 'Luan Santana',
            imagem: 'img/cards/luan.JPG'
        },
        {
            nome: 'Ludmilla',
            imagem: 'img/cards/ludmilla.JPG'
        },
        {
            nome: 'Maisa',
            imagem: 'img/cards/maisa.JPG'
        },
        {
            nome: 'Marta',
            imagem: 'img/cards/marta.JPG'
        },
        {
            nome: 'Neymar',
            imagem: 'img/cards/neymar.JPG'
        },
        {
            nome: 'Rodrigo Faro',
            imagem: 'img/cards/rodrigo.JPG'
        },
        {
            nome: 'Ronaldinho',
            imagem: 'img/cards/ronaldinho.JPG'
        },
        {
            nome: 'Silvio Santos',
            imagem: 'img/cards/silvio_santos.JPG'
        },
        {
            nome: 'Tata Werneck',
            imagem: 'img/cards/tata.JPG'
        },
        {
            nome: 'Thiaguinho',
            imagem: 'img/cards/thiaguinho.JPG'
        },
        {
            nome: 'Tiago Leifert',
            imagem: 'img/cards/tiago_leifert.JPG'
        },
        {
            nome: 'Whindersson',
            imagem: 'img/cards/whindersson.JPG'
        }
    ]

    for (let card of imagens) {
        
        if(card.nome === seletor.value) {
            image.src = card.imagem;
        }
    
    }

}