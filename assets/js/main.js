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
})
$('body').on('click', '#gotoDoc', (e) => {
    e.preventDefault();
    $('html, body').animate( { scrollTop: $('#menu').offset().top }, 750 );
})
