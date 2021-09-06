/**
 * Aside open/close
 */
$('aside>.burger').on('click', (e) => {
    e.preventDefault();
    $('body').toggleClass('menu-close')
})
$('aside>nav .collapser').on('click', (e) => {
    $(e.target).toggleClass('active');
    $(e.target).parent().next().toggleClass('open');
    e.preventDefault();
})
$(window).on('scroll', (e) => {
    if ($(window).scrollTop() < $('body')[0].offsetHeight / 3) {
        $('.welcome>.bounce').fadeIn(500)
    } else {
        $('.welcome>.bounce').fadeOut(500)
    }
})
$('body').on('click', '#gotoDoc', (e) => {
    e.preventDefault();
    $('html, body').animate( { scrollTop: $('#menu').offset().top }, 750 );
})
