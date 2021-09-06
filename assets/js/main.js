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
