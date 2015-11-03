$(function() {
    $('.burger-container').on('click', function () {
        $('.nav-location header').toggleClass('animate-location-title');
        $('.nav-container').toggleClass('animate-nav');
        $('.burger-line').toggleClass('open');
    });
});