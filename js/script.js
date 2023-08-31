$(window).on('load', function() {
    $('.preloader').fadeOut(100)
}),
jQuery(function(a) {
    'use strict';
    var h = lozad(), c, d, e, f, b;
    h.observe(),
    a('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 160,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim'),
                this.st.mainClass = this.st.el.attr('data-effect')
            }
        },
        closeOnContentClick: !0,
        midClick: !0,
        fixedContentPos: !1,
        fixedBgPos: !0
    }),
    c = document.querySelector('.shuffle-wrapper'),
    c && (d = window.Shuffle,
    e = new d(document.querySelector('.shuffle-wrapper'),{
        itemSelector: '.shuffle-item',
        buffer: 1
    }),
    jQuery('input[name="shuffle-filter"]').on('change', function(b) {
        var a = b.currentTarget;
        a.checked && e.filter(a.value)
    })),
    a('#testimonials').slick({
        infinite: !0,
        arrows: !0,
        autoplay: !0,
        autoplaySpeed: 4e3,
        prevArrow: '<div class="carousel-left d-none d-sm-block">&lt;</div>',
        nextArrow: '<div class="carousel-right d-none d-sm-block">&gt;</div>'
    }),
    f = a('html, body'),
    a('.navbar-nav a, .page-scroll').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var b = a(this.hash);
            if (b = b.length ? b : a('[name=' + this.hash.slice(1) + ']'),
            b.length) {
                f.animate({
                    scrollTop: b.offset().top - 50
                }, 1500, 'easeInOutExpo');
                return
            }
        }
    }),
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function(e, a, b, c, d) {
            return a === 0 ? b : a === d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
        }
    }),
    a(window).on('click', function(b) {
        if (a(b.target.closest('.navbar')).length > 0 && !a(b.target.closest('.navbar a')).length > 0)
            return;
        var c = a('.navbar-collapse');
        c.hasClass('show') && a('.navbar-toggler').click()
    });
    function g() {
        var b;
        a('.count').length !== 0 && (b = a('.count').offset().top - window.innerHeight),
        a(window).scrollTop() > b && a('.count').each(function() {
            var b = a(this)
              , c = b.attr('data-count');
            a({
                countNum: b.text()
            }).animate({
                countNum: c
            }, {
                duration: 1e3,
                easing: 'swing',
                step: function() {
                    b.text(Math.floor(this.countNum))
                },
                complete: function() {
                    b.text(this.countNum)
                }
            })
        })
    }
    a(window).on('scroll', function() {
        g()
    }),
    b = a('#message')[0],
    a(window).innerHeight() <= 600 ? b.rows = 5 : b.rows = 10;
    let i = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${i}px`)
})
