//= jquery.min.js
//= jquery.magnific-popup.min.js
//= calender.js
//= slick.min.js
//= svgxuse.js
//= select2.full.js
//= jquery.MultiFile.min.js

// constructor/main.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

var sidebarRight = function() {
    var mainSidebar = document.querySelector('#personal-kabinet'),
        closeSidebar = document.querySelector('#close-perscab'),
        openSidebar = document.querySelector('.admin-head .admin-dropdown'),
        overlay = document.querySelector('#overlayer');
    overlay.addEventListener('click', function() {
        mainSidebar.classList.remove('is-show')
        overlay.classList.remove('is-show')
    })
    openSidebar.addEventListener('click', function() {
        mainSidebar.classList.add('is-show')
        overlay.classList.add('is-show')
    })
    closeSidebar.addEventListener('click', function() {
        mainSidebar.classList.remove('is-show')
        overlay.classList.remove('is-show')
    })
};
sidebarRight();

function heightFooter() {
    var heightFoot = $('.footer').outerHeight();
    $('body').css({ 'padding-bottom': heightFoot });
}
heightFooter()
$(window).resize(function() {
    heightFooter()
});

var horizontalScroll = function() {
    var listScroll = document.querySelectorAll('.menu-kabinet--list li'),
        widthList = 0;
    listScroll.forEach(function(element) {
        widthList += element.offsetWidth
        console.log(widthList)
    });
    document.querySelector('.menu-kabinet--list').setAttribute("style", "width:" + widthList + "px;");

};
// horizontalScroll();
// $(window).resize(function() {
//     horizontalScroll();
// });


/* Select */

$(".js-select2").select2({
    minimumResultsForSearch: -1,
    // templateResult: formatState,
    // templateSelection: formatState,
    // dropdownParent: $('.phone-modal')
});
$(".js-select2-multi").select2();

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

$(document).ready(function() {
    $(function() { // Init
        $('.multi-pt').MultiFile({
            max: 3,
        });
    });
    // Drop container
    $(".upload-label").on('click', function() {
        $(this).next(".MultiFile-wrap").find('input:nth-last-child(2)').click()
    });

    // Tabs
    tabs();
    $('.tab-list li').click(function() {
        var obj = $(this);
        var container = obj.parents('.tab-container');
        var index = obj.index();
        $('.tab-list li', container).removeClass('active').eq(index).addClass('active');
        $('.tab-pane .pane', container).hide().removeClass('active').eq(index).fadeIn().addClass('active');
    });

    function tabs() {
        $('.tab-container').each(function() {
            $('.tab-list li', this).eq(0).addClass('active');
            $('.tab-pane .pane', this).eq(0).fadeIn().addClass('active');
        });
    }
});