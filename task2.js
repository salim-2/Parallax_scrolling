$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.background').css('top', (0 - (scrolled * .25)) + 'px');
}