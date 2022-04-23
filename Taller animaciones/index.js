$(document).ready(function(){

    $('html, body').scrollTop(0);

    $('.modal').css({display:'none'});

    $('.verMas').click(function(){
        $('.content').animate({
            left: '-100vw'
        });
    });

    $('#volver').click(function(){
        $('.content').animate({
            left: '0vw'
        });
    });

    $('#verSubtemas').click(function(){
        $('.contentPage').animate({
            top:"-100vh"
        });
        $('.content').animate({
            left: '0vw'
        });
    });

    $('.verMasSubTitulos').click(function(){
        $('.modal').css({display:'flex'});
        $('.modalAnimacion').animate({
            top: '0px'
        });
    });

    $('#cerrarModal').click(function(){
        $('.modalAnimacion').animate({
            top: '-100vh'
        },function(){
            $('.modal').css({display:'none'});
        });
        /*/$('.contentPage').animate({
            top:"0vh"
        });/*/
    });

    $('body').mousemove(function(ev){
        console.log(ev.clientY, ev.clientX);
        $('.puntero').css({
            left: ev.clientX+"px" ,
            top: ev.clientY+"px"
        });
    });


});