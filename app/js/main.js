$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider-dotshead',
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt=""></img>',
});

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
    });

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt=""></img>',
    asNavFor: '.slider-map',
});   

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
});
  
});