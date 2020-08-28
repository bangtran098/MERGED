$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('.counter').countUp({
    'time': 2000,
    'delay': 10
});