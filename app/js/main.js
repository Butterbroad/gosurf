$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider-dots',
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt=""></img>',
});

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
    });

  
});