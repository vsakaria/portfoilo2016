$(document).ready(function() {
    $('.burger-container').on('click', function() {
        $('.nav-location header').toggleClass('animate-location-title');
        $('.nav-container').toggleClass('animate-nav');
        $('.burger-line').toggleClass('open');
    });

    $('.nav-container').on('click', function(e) {
        var title = e.target.innerHTML;
        var page = $(e.target).data('page');

        $('.nav-title').html(title);
        $('.nav-location header').toggleClass('animate-location-title');
        $(this).toggleClass('animate-nav');

        $('.main-container').hide();
        $('.' + page).toggle();

        return false;
    });

    $(window).resize(function() {
        var width = $(window).width();
        if (width >= 768) {
            $('.nav-container').removeClass('nav-container-mobile').addClass('nav-container-large');
        } else {
            $('.nav-container').removeClass('nav-container-large').addClass('nav-container-mobile');
        }
    }).resize();
});