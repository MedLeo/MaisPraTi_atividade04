$(document).ready(function () {

    $(".banner").vegas({
        timer: false,
        slides: [
            { src: "img/imgvegas01.jpg" },
            { src: "img/imgvegas02.jpg" },
            { src: "img/imgvegas03.jpg" },
            { src: "img/imgvegas04.jpg" },
            { src: "img/imgvegas05.jpg" },
            { src: "img/imgvegas06.jpg" }
        ],

        animation: 'kenburnsDown'
    });


    // Clone defaults
    var imgOpts = $.extend(true, {}, $.fancybox.defaults, {
        caption: function (instance, item) {
            return $(this).next('figcaption').html();
        }
    });

    // Shortcut to apply options to image gallery
    function applyImgOpts() {
        $('[data-fancybox]').fancybox(imgOpts);
    }

    applyImgOpts();

    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 500);
    })

});





