/*
 Theme Name: Garlo
 Theme URI: https://themewar.com/html/garlo/
 Author: ThemeWar
 Author URI: https://themeforest.net/user/themewar/portfolio
 Description: Garlo - Beauty Cosmetics Shop HTML Template
 Version: 1.0
 License:
 License URI: 
*/

/*==================================
    [Table of contents]
===================================
    01. Variables
    02. Nice Selects
    03. Owl Carousels and Slick
    04. Masonry Grid
    05. Count Down
    06. Image Popup
    07. Back To Top
    08. Pointer Image
    09. Revolution Slider
    10. Sidebar Toggle
    11. Price Slider
    12. Payment Method Toggle
    13. Cirle Progress
    14. Skill Bar
    15. Counter
    16. Sticky Header
    17. Popup Search
    18. Preloader
    19. Contact Form Submission
    20. Google Maps
    21. Social Toggle Menu
    22. Mobile Menu
*/

(function () {
    'use strict';
    /*------------------------------------------------------
    /  01. Variables
    /------------------------------------------------------*/
    
    var $currencySwitcher = $('#currencySwitcher'),
        $collectionCarousel = $('.collectionCarousel'),
        $productCarousel = $('.productCarousel'),
        $productCarouselTwo = $('.productCarouselTwo');
        $shopCarousel = $('.shopCarousel');
        $clientCarousel = $('.clientCarousel');

    /*------------------------------------------------------
    /  02. Nice Select
    /------------------------------------------------------*/
    if($currencySwitcher.length > 0){
        $currencySwitcher.niceSelect();
    }

    /*------------------------------------------------------
    /  02. OWL Carousels
    /------------------------------------------------------*/
    if($collectionCarousel.length > 0){
        var $collectionCarousel_obj = $collectionCarousel.owlCarousel({
            autoplay: false,
            margin: 30,
            loop: false,
            nav: true,
            navText:['<i class="garlo-left-arrow"></i>', '<i class="garlo-right-arrow"></i>'],
            dots: false,
            items: 2,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }
    if($productCarousel.length > 0){
        var $productCarousel_obj = $productCarousel.owlCarousel({
            autoplay: false,
            margin: 30,
            loop: false,
            nav: true,
            navText:['<i class="garlo-left-arrow"></i>', '<i class="garlo-right-arrow"></i>'],
            dots: false,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    if($productCarouselTwo.length > 0){
        var $productCarouselTwo_obj = $productCarouselTwo.owlCarousel({
            autoplay: false,
            margin: 30,
            loop: false,
            nav: true,
            navText:['<i class="garlo-left-arrow"></i>', '<i class="garlo-right-arrow"></i>'],
            dots: false,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // Shop Carousel
    if($shopCarousel.length > 0){
        var $shopCarousel = $shopCarousel.owlCarousel({
            autoplay: false,
            margin: 30,
            loop: false,
            nav: true,
            navText:['<i class="garlo-left-arrow"></i>', '<i class="garlo-right-arrow"></i>'],
            dots: false,
            items: 3,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    if($clientCarousel.length > 0){
        var $clientCarousel = $clientCarousel.owlCarousel({
            autoplay: false,
            margin: 30,
            loop: false,
            nav: false,
            dots: false,
            items: 5,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }
    /*-- Testimonial --*/
    if($('.testimonilaSlider01').length > 0){
       $('.testimonilaSlider01').owlCarousel({
            autoplay: false,
            margin: 20,
            loop: false,
            nav: true,
            navText:['<i class="garlo-left-arrow"></i>', '<i class="garlo-right-arrow"></i>'],
            dots: false,
            items: 2,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
            }
        });
    }
    /*-- Discount Slider --*/
    if($(".discountSlider").length > 0){
       $('.discountSlider').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText:['<i class="garlo-left-arrow"></i>', '<i class="garlo-right-arrow"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 1
        });
    }
    /*--- Client Silder ---*/
    if($(".client-slider").length > 0){
       $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 3
                },
                990: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }
    /*--- Gallery Silder ---*/
    if($(".glslider").length > 0){
       $('.glslider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 11,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="twi-chevron-left1"></i>', '<i class="twi-chevron-right1"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    /*--------------------------------------------------------
    / 05. Count Down
    /----------------------------------------------------------*/
    if ($('.garloCountDown').length > 0) {
        var d = $('.garloCountDown').attr('data-day');
        var m = $('.garloCountDown').attr('data-month');
        var y = $('.garloCountDown').attr('data-year');
        $('.garloCountDown').countdown({
            //until: new Date(y, m - 1, d),
            until: '+8d',
            format: 'DHMS',
            labels: ['Yrs', 'Mths', 'Weks', 'Days', 'Hrs', 'Mins', 'Secs']
        });
    }

    /*------------------------------------------------------
    /  09. All Popup
    /------------------------------------------------------*/
    // Image Popup
    if ($('.popup_image').length > 0) {
        $('.popup_image').lightcase({
            transition: 'elastic',
            showSequenceInfo: false,
            slideshow: true,
            maxHeight: 650,
            swipe: true,
            showTitle: false,
            showCaption: false,
            controls: true
        });
    }
    // Video Popup
    if ($('.popup_video').length > 0) {
        $('.popup_video').lightcase({
            transition: 'elastic',
            showSequenceInfo: false,
            slideshow: false,
            swipe: true,
            showTitle: false,
            showCaption: false,
            controls: true
        });
    }
    // Search Popup
    $('.anSearch').on('click', function (e) {
        e.preventDefault();
        $('.popup_search_sec').toggleClass('active');
    });
    $('.popup_search_overlay').on('click', function () {
        $('.popup_search_sec').removeClass('active');
    });
    $('.popup_search_form input').on('focus', function(){
        $('.popup_search_form').addClass('focused');
    });
    $('.popup_search_form input').on('blur', function(){
        $('.popup_search_form').removeClass('focused');
    });

    /*--------------------------------------------------------
    / 16. Sticky Header
    /---------------------------------------------------------*/
    if($(".isSticky").length > 0){
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 300){
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            }else{
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }

    /*--------------------------------------------------------
    / 05. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 15. Popup Menu
    /---------------------------------------------------------*/
    $('.popup_togggle_menu').on('click', function(e) {
        e.preventDefault();
        $("body").addClass("menu__open");
        $('.popup_menu').addClass('active').fadeIn();
        setTimeout(function() {
            if ($('.popup_menu').hasClass('active')) {
                var tlMenu = new TimelineLite();
                tlMenu.set($(".animated_menu"), {
                    y: 80,
                    opacity: 0
                });
                $(".animated_menu").each(function(index, element) {
                    tlMenu.to(element, 0.5, {
                        y: 0,
                        opacity: 1,
                        delay: 0.4,
                        ease: Power2.easeOut
                    }, index * 0.1)
                });
            } else {
                var tlMenu = new TimelineLite();
                $(".animated_menu").each(function(index, element) {
                    tlMenu.to(element, 0.25, {
                        y: -80,
                        opacity: 0,
                        ease: Power2.easeIn
                    }, index * 0.05)
                });
            }
        }, 20)
    });
    $('#close_menu').on('click', function() {
        $("body").removeClass("menu__open");
        var tlMenu = new TimelineLite();
        $(".animated_menu").each(function(index, element) {
            tlMenu.to(element, 0.25, {
                y: -80,
                opacity: 0,
                ease: Power2.easeIn
            }, index * 0.05)
        });
        setTimeout(function() {
            $('.popup_menu').fadeOut()
        }, 500)
    });
    $(window).on("load resize", function (e) {
        if ($(window).width() < 1199) {
            $('.menu_popup ul li.menu-item-has-children > a').on('click', function(e){
                e.preventDefault();
                $(this).siblings('ul').slideToggle();
                $(this).parent().toggleClass('active');
            });
        };
    });

    /*--------------------------------------------------------
    /   03. Back To Top
    /--------------------------------------------------------*/
    function backtotop() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 50) {
                $('#backtotop').addClass('activate');
            } else {
                $('#backtotop').removeClass('activate');
            }
        });
        $('#backtotop, #backtotop02').on('click', function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
    }
    backtotop();


    /*------------------------------------------------------
    /  16. Rev Slider
    /------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1170, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        minHeight: '818',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 95,
                    v_offset: -59
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 95,
                    v_offset: -59
                }
            },
            bullets: {
                enable: false
            }
        },
    });

  /*--- Client Silder2 ---*/
    if($(".client-slider2").length > 0){
        $('.client-slider2').owlCarousel({
             autoplay: false,
             loop: true,
             margin: 0,
             responsiveClass: true,
             nav: false,
             dots: false,
             smartSpeed: 600,
             items: 6,
             responsive: {
                 0: {
                     items: 1
                 },
                 760: {
                     items: 3
                 },
                 990: {
                     items: 4
                 },
                 1200: {
                     items: 6
                 }
             }
         });
    }
    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1170, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        minHeight: '815',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 105,
                    v_offset: 13
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 105,
                    v_offset: 13
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    
})(jQuery)