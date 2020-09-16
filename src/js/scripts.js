//= jquery.min.js
//= jquery.magnific-popup.min.js
//= constructor/main.js
//= slick.min.js
//= svgxuse.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

function heightFooter() {
    var heightFoot = $('.footer').outerHeight();
    $('body').css({ 'padding-bottom': heightFoot });
}
heightFooter()
$(window).resize(function() {
    heightFooter()
});

/*  */

/* Popup Window */

$(".popup").magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
});

/* Gallery */

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>Подпись к картинке</small>';
        }
    }
});

// Video

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});

/* Popup Window End */

/* Slider Header */

$('.news-slider').slick({
    infinite: false,
    // autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    speed: 400,
    dots: false,
    // adaptiveHeight: true,
    // fade: true,
    // cssEase: 'linear',
    appendArrows: ".slider-arrows--header",
    prevArrow: '<div class="top-sliser--prev"><img src="img/icon/arrow-slider.svg" /></div>',
    nextArrow: '<div class="top-sliser--next"><img src="img/icon/arrow-slider.svg" /></div>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
});

/* Slider Header End */

var menuOpen = function() {
    $('.open-menu').click(function(e) { // Клик по элементу
        e.preventDefault();
        $('.top-menu--block').toggleClass('is-active'); // Скрытый элемент
    });
    $(document).mouseup(function(e) {
        var container = $(".header .flex-container"); // Родительский контейнер элемента где клик
        if (container.has(e.target).length === 0) {
            $('.top-menu--block').removeClass('is-active');
        }
    });
    $('#close-menu').on('click', function() {
        $('.top-menu--block').removeClass('is-active');
    });
    $(window).resize(function() {
        $('.top-menu--block').removeClass('is-active');
    });

};
menuOpen();