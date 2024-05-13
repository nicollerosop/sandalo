$(document).ready(function () {

   
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 180) {       
            $( ".menu" ).addClass( "menuchange" );
        } else {
            $( ".menu" ).removeClass( "menuchange" );
        }

    });

});