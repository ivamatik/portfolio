$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    //toggle menu/navbar script
    $('.menu-btn, .menu a').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.menu-btn .menu a').click(function () {
        $('.navbar .menu').collapse('hide');
        $('.menu-btn i').toggleClass("hide");
    });
});