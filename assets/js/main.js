/**
 * Aside open/close
 */
$('aside>.burger').on('click', (e) => {
    e.preventDefault();
    $('body').toggleClass('menu-close')
})
