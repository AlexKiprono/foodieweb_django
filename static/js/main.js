(function(Ksh) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if (Ksh('#spinner').length > 0) {
                Ksh('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    Ksh(window).scroll(function() {
        if (Ksh(this).scrollTop() > 45) {
            Ksh('.navbar').addClass('sticky-top shadow-sm');
        } else {
            Ksh('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const Kshdropdown = Ksh(".dropdown");
    const KshdropdownToggle = Ksh(".dropdown-toggle");
    const KshdropdownMenu = Ksh(".dropdown-menu");
    const showClass = "show";

    Ksh(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            Kshdropdown.hover(
                function() {
                    const Kshthis = Ksh(this);
                    Kshthis.addClass(showClass);
                    Kshthis.find(KshdropdownToggle).attr("aria-expanded", "true");
                    Kshthis.find(KshdropdownMenu).addClass(showClass);
                },
                function() {
                    const Kshthis = Ksh(this);
                    Kshthis.removeClass(showClass);
                    Kshthis.find(KshdropdownToggle).attr("aria-expanded", "false");
                    Kshthis.find(KshdropdownMenu).removeClass(showClass);
                }
            );
        } else {
            Kshdropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    Ksh(window).scroll(function() {
        if (Ksh(this).scrollTop() > 300) {
            Ksh('.back-to-top').fadeIn('slow');
        } else {
            Ksh('.back-to-top').fadeOut('slow');
        }
    });
    Ksh('.back-to-top').click(function() {
        Ksh('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    Ksh('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    Ksh(document).ready(function() {
        var KshvideoSrc;
        Ksh('.btn-play').click(function() {
            KshvideoSrc = Ksh(this).data("src");
        });
        console.log(KshvideoSrc);

        Ksh('#videoModal').on('shown.bs.modal', function(e) {
            Ksh("#video").attr('src', KshvideoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        Ksh('#videoModal').on('hide.bs.modal', function(e) {
            Ksh("#video").attr('src', KshvideoSrc);
        })
    });


    // Testimonials carousel
    Ksh(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);