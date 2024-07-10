// Smooth scrolling
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top
        },
        500,
        'linear'
    );
});

// AOS initialization for scroll animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true // Animation only once
});
