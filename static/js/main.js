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
    $(hash).modal('show');
});
