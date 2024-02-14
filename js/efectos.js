$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    if ($(window).width() > 880) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0 // Cambié 'o' a 0 ya que no está definido en este contexto
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    var acercaDe = $('#acerca-de').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe // Cambié 380 a 'acercaDe' para utilizar la variable definida anteriormente
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        var menuPosition = $('#platillos').offset().top;
        $('html, body').animate({
            scrollTop: menuPosition
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        var galeriaPosition = $('#galeria').offset().top;
        $('html, body').animate({
            scrollTop: galeriaPosition
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        var ubicacionPosition = $('#ubicacion').offset().top;
        $('html, body').animate({
            scrollTop: ubicacionPosition
        }, 500);
    });
});

