var bg = {
        '1' : ['/static/img/home/home_01.jpg','Ciudad de Noche '],
        '2' : ['/static/img/home/home_last.jpg','Luces '],
        '3' : ['/static/img/home/kar_accidents_garzonfilms.jpg','Kar Accidents '],
        '4' : ['/static/img/home/piano_garzonfilms.jpg','Tigres del Norte '],
        '5' : ['/static/img/home/pico_de_orizaba.jpg','Pico de Orizaba '],
        '6' : ['/static/img/home/gerardo.jpg','Gerardo '],
        '7' : ['/static/img/home/luis.jpg','Luis - Mari Lechuga '],
        '8' : ['/static/img/home/mario.jpg','Mario - Mari Lechuga '],
        '9' : ['/static/img/home/samano.jpg','Samano - Mari Lechuga ']

    };
    function randomImg(){
        var imgRdm, numeroImagenes = 9;
        imgRdm = Math.floor(Math.random() * numeroImagenes +1 );

        document.getElementById('home').src= bg[imgRdm][0];
        document.getElementById('home').alt= bg[imgRdm][1];
        document.getElementById('caption').innerText = bg[imgRdm][1];

    }
