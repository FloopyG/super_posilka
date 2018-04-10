$('.slider1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
})
$('.slider2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    adaptiveHeight: true,
    rows: 2,
    slidersPerRow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 2,
                slidersPerRow: 3,
                arrows: true
            }
        }
    ]
})
