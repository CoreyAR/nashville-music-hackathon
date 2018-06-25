$(function() {
    $('.about-button').bind('click', function(event) {
    	$('.about-button').each(function() {
    		this.classList.remove('active')
    	})
        event.target.classList.add('active')
    });
});