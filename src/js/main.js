$(function () {
    $(".testimonials__slider").slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $(".header__btn-menu, .menu-list li a").click(function () {
        $(".header__btn-menu").toggleClass("active");
        $('.menu-list').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
});

