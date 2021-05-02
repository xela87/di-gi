$(".intro-right-arrow").click(function () {
    topSectionSlider.trigger('owl.next');
});
$(".intro-left-arrow").click(function () {
    topSectionSlider.trigger('owl.prev');
});

let topSectionSlider = $("#top-slider").owlCarousel({
    autoPlay: 5000,
    items: 1,
    itemsDesktop: [1024, 1],
    itemsDesktopSmall: [768, 1],
    itemsTablet: [480, 1],
    itemsMobile: 1
});


