$(function () {
    $('.about-button').bind('click', function (event) {
        $('.about-button').each(function () {
            this.classList.remove('active')
        })
        event.target.classList.add('active')
    });
});

$(function () {
    var pastRoute = window.location.pathname.includes('2017')
    if (pastRoute) {
        $('.main-nav').each(function () {
            this.classList.add('hidden')
        })
        $('.off-main-nav').each(function () {
            this.classList.remove('hidden')
        })
    } else {
        $('.main-nav').each(function () {
            this.classList.remove('hidden')
        })
        $('.off-main-nav').each(function () {
            this.classList.add('hidden')
        })
    }
});

// Show modal on page load
$(window).on('load', function () {
    var hash = window.location.hash
    // Hard coded for expediency to stop #speakers and other anchors from adding overlay
    if (hash === '#Trevor-Hinesley' || hash === '#christopher-igoe' || hash === '#stephen-brady' || hash === '#tony-lassandro' ) {
        $(hash).modal('show');
        var $anchor = $('#speakers');
        if (hash === '#tony-lassandro') {
            $anchor = $('#workshops');
        }
        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top
        }, 1500, 'easeInOutExpo');
    }
});
