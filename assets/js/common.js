$(document).ready(function(){

    $('.aside-menu .item-head').on('click',function () {
        $(this).parents('.aside-menu-i').toggleClass('open');
    });
    $('.main-block-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
         // arrows: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    $('.login-button').on('click', function () {
        $('.login-popup').addClass('open')
    });

    $('.login-popup .overlay').on('click', function () {
        $('.login-popup').removeClass('open')
    });


    $('.mobile-menu-button').on('click', function () {
        $('.mobile-menu-button').toggleClass('open')
        $('.menu-nav').toggleClass('open')
    });

});


