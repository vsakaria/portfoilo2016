$(document).ready(function() {
    addLargeScreenEvents();
    addMobileEvents();
    addBurgerEvents();
});


var addBurgerEvents = function() {
    $('.burger-container').on('click', function() {
        $('.nav-location header').toggleClass('animate-location-title');
        $('.nav-container').toggleClass('animate-nav');
        $('.burger-line').toggleClass('open');
    });
}


var addMobileEvents = function() {

$('.nav-container-mobile').on('click', function(e) {
        if($(this).hasClass('nav-container-large')) return;

        var title = e.target.innerHTML;
        var page = $(e.target).data('page');

        $('.nav-title').html(title);
        $('.nav-location header').toggleClass('animate-location-title');
        $('.nav-container').toggleClass('animate-nav');
        $('.burger-line').toggleClass('open');

        $('.main-container').hide();
        $('.' + page).toggle();

        return false;
    });
}

var addLargeScreenEvents = function() {
    $('.nav-container-large ul li a').on('click', function(e) {
        var title = e.target.innerHTML;
        var page = $(e.target).data('page');

        $('.nav-title').html(title);
        $('.nav-location header').toggleClass('animate-location-title');

        $('.main-container').hide();
        $('.' + page).toggle();

        $('.nav-location header').toggleClass('animate-location-title');


        return false;
    });
}


//var width = $(window).width();
//     if ( width is between 768 and 1920 width >= 768) {
//         $('.nav-container').removeClass('nav-container-mobile').addClass('nav-container-large');
//         $('.nav-container-mobile').off();
//
//     } else if(width is between 0 and 767 ){
//         $('.nav-container').removeClass('nav-container-large').addClass('nav-container-mobile');
//         $('.nav-container-large').off();
//         addMobileEvents();
//         addBurgerEvents();
//     }
// }).resize();