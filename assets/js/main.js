let expanded = [];

if (Cookies.get('menu') != null) {
    expanded = Cookies.get('menu').split(',')
    let i = 0;
    while (i < expanded.length) {
        $('aside a[href="' + expanded[i] + '"] .collapser').addClass('active')
        $('aside a[href="' + expanded[i] + '"] + ul').addClass('open')
        i++;
    }
} else {
    expanded = []
    Cookies.set('menu', '')
}
$('a[href$="' + location.pathname + '"').addClass('active');
/**
 * Aside open/close
 */
$('aside>header>.burger').on('click', (e) => {
    e.preventDefault();
    $('body').toggleClass('menu-close')
})
$('aside>nav .collapser').on('click', (e) => {
    $(e.target).toggleClass('active');
    $(e.target).parent().next().toggleClass('open');
    e.preventDefault();
    if (expanded.indexOf($(e.target).parent().attr('href')) === -1) {
        expanded.push($(e.target).parent().attr('href'))
    } else {
        expanded.splice(expanded.indexOf($(e.target).parent().attr('href')), 1)
    }
    Cookies.set('menu', expanded.join(','))
})
$(window).on('scroll', (e) => {
    if ($(window).scrollTop() < $('body')[0].offsetHeight / 3) {
        $('.welcome>.bounce').fadeIn(500)
    } else {
        $('.welcome>.bounce').fadeOut(500)
    }
    if ($(window).scrollTop() > $('body>aside').offset().top && !$('body>aside').hasClass('fixed')) {
        $('body>aside').attr('data-offset', $('body>aside').offset().top).addClass('fixed')
    } else {
        if ($(window).scrollTop() < $('body>aside').offset().top || ($('body>aside').attr('data-offset') != undefined && $(window).scrollTop() < $('body>aside').attr('data-offset'))) {
            $('body>aside').removeClass('fixed')
        }
    }
})
$('body').on('click', '#gotoDoc', (e) => {
    e.preventDefault();
    $('html, body').animate( { scrollTop: $('#menu').offset().top }, 750 );
})
