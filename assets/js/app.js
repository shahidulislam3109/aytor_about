

$(function () {

    $('.banner_slider').slick({
        arrows:false,
        dots:true,
        dotsClass:'banner_slider_dots',
    });
    $('.new_arrival_slider').slick({
        slidesToShow:4,
        slidesToScroll:2,
        
     
    });
    $('.best_seller_slider').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll:2,
    });
    $('.best_seller2_slider').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll:2,
    });
    $('.deal_slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:2,
        slidesToScroll:1,
        dotsClass:'deal_slider_dots'
    });
    $('.news_slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:4,
        slidesToScroll:1,
        dotsClass:'news_slider_dots'
    });
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))