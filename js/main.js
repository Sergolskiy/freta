

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

    $('.field-studio-certificats-slider-slider').owlCarousel({
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
                items : 1,
            },
            // breakpoint from 768 up
            768 : {
                items : 2,
                margin: 10,
            },
            1100 : {
                items : 3,
                margin: 10,
            }
        }
    });

    $('.research__slider').owlCarousel({
        items: 23,
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
                items : 1,
            },
            // breakpoint from 768 up
            768 : {
                items : 2,
                margin: 10,
            },
            1100 : {
                items : 2,
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

    if ($(window).width() < 992) {
        $('.viewed__list').owlCarousel({
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
                }
            }
        });

        $('.news__items-product-slider').owlCarousel({
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
                }
            }
        });
    }

 if ($(window).width() < 580) {
        $('.reviev-fb-slider').owlCarousel({
            items: 1,
            nav: true,
            margin: 10
        });

    }


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

    $(document).on('click', '.catalog__category', function (e) {
        $(this).closest('.catalog__categories').find('.catalog__category').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.catalog__categories-btn--mobile', function (e) {
        $(this).toggleClass('open');
        $('.catalog__categories').toggleClass('open');
    });

    $(document).on('click', '.footer-btn-to-top', function (e) {
        jQuery('html,body').animate({scrollTop:0},1000);
    });

    $(document).on('click', '.contact__tab-name', function (e) {
        $('.contact__item').removeClass('open');
        $(this).parents().toggleClass('open');
    });

    $(document).on('click', '.contact__item.open .contact__tab-name', function (e) {
        $('.contact__item').removeClass('open');
    });

    $(document).on('click', '.region-name', function (e) {
        $('.region-dillers.open').slideToggle();
        $('.region-dillers.open').removeClass('open');
        $(this).siblings('.region-dillers').slideToggle();
        $(this).siblings('.region-dillers').addClass('open');
    });

    $(document).on('click', '.contact__tab-dealers-btn', function (e) {
       $('.dealers-popup').addClass('open');
       $('body').addClass('overHid');
    });

    $(document).on('click', '.popup__close', function (e) {
        $('.dealers-popup').removeClass('open');
        $('body').removeClass('overHid');
    });

    $(document).on('click', '.popup', function (e) {
        if(e.target.classList[0] == "popup") {
            $('.dealers-popup').removeClass('open');
            $('body').removeClass('overHid');
        }
    });

    if ($(window).width() < 768) {

        $(document).scroll(function () {
            var top = $(document).scrollTop();

            if (top < 40) {
                $(".detail-head").addClass('stay');
                $(".detail-head").removeClass('detail-head--scrolled');
            } else {
                $(".detail-head").removeClass('stay');
                $(".detail-head").addClass('detail-head--scrolled');
            }
        });

    }

    $(document).scroll(function () {
        var top = $(document).scrollTop();

        if (top < 90) {
            $(".footer-btn-to-top").addClass('stay');
            $(".footer-btn-to-top").removeClass('scrolled');
        } else {
            $(".footer-btn-to-top").removeClass('stay');
            $(".footer-btn-to-top").addClass('scrolled');
        }
    });

    $(document).on('click', '.mobile-menu', function (e) {
			e.preventDefault();
		});

    if($(document).find('.certificate__categories').length > 0) {
        $('.js-example-basic-single').select2({
            minimumResultsForSearch: -1
        });
    }

});
