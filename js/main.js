

$(document).ready(function () {
    $('.certificate__slider-slider').owlCarousel({
        items: 4,
        nav: true,
        margin: 10,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
                margin: 0,
            },
            // breakpoint from 480 up
            480 : {
                margin: 10,
                items : 2,
            },
            // breakpoint from 768 up
            768 : {
                items : 3,
                margin: 10,
            },
            1100 : {
                items : 4,
                margin: 10,
            }
        }
    });

    $('.the-boys-slider').owlCarousel({
        items: 3,
        nav: true,
        margin: 10,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
                margin: 0,
            },
            // breakpoint from 480 up
            480 : {
                margin: 10,
                items : 2,
            },
            // breakpoint from 768 up
            768 : {
                items : 3,
                margin: 10,
            },
            1100 : {
                items : 3,
                margin: 10,
            }
        }
    });


    $('.has-submenu').click(function () {
    });

    $(document).click(function (e) {
        if($(e.target).closest('.has-submenu').length == 0){
            $('.has-submenu').removeClass('open');
        }
    });

    $('.header__menu-link').click(function (e) {
        if($(this).closest('.has-submenu').length > 0 && $(this).closest('.has-submenu').hasClass('open')){
            // if($(document).width() < 992){
                $('.has-submenu').removeClass('open');
            // }
        } else {
            e.preventDefault();
            $('.has-submenu').removeClass('open');
            $(this).closest('.has-submenu').toggleClass('open');
            console.log(111);
        }

    });

    $('.mobile-menu').click(function () {
        $(this).toggleClass('open');
        $('.header__inner-right').toggleClass('open');
    });


    $(document).scroll(function () {
        var top = $(document).scrollTop();

        if (top < 1) {
            $(".header").addClass('stay');
            $(".header").removeClass('header--scrolled');
        } else {
            $(".header").removeClass('stay');
            $(".header").addClass('header--scrolled');
        }

    });

    $('.product__like').click(function (e) {
        e.preventDefault();
        $('.header__like').addClass('active');
    });

    $('.product__compare').click(function (e) {
        e.preventDefault();
        $('.header__compare').addClass('active');
    });
});
