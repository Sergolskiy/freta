

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
            },
            // breakpoint from 480 up
            480 : {
                items : 2,
            },
            // breakpoint from 768 up
            768 : {
                items : 3,
            },
            1100 : {
                items : 4,
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
            if($(document).width() < 992){
                $('.has-submenu').removeClass('open');
            }
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
});
