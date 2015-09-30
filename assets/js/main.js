$(function() {
    $('#slides').slidesjs({
        width: 940,
        height: 440,
        pagination: {
            active: false
        },
        navigation: {
            active: true
        }
    });

    $('.slidesjs-previous').empty().append("<img src='./images/right-arrow.png'>");

    $('.slidesjs-next').empty().append("<img src='./images/left-arrow.png'>");

    $('.burger-container').on('click', function() {
        $('.page-nav').toggle()
    });

    setTimeout(function() {
        $('.slidesjs-next').trigger('click');
    }, 1500);

});