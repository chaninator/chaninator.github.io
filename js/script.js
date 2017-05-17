// collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// hide name until scroll
function hideNavname() {
    if ($(".navbar").offset().top > 300) {
        $(".navname").addClass("top-nav-name-collapse");
        $(".navname").addClass("animated");
        $(".navname").addClass("pulse");
    } else {
        $(".navname").removeClass("top-nav-name-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(window).scroll(hideNavname);
$(document).ready(hideNavname);


// page scrolling - jQuery easing
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});
