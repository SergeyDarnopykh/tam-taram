const phone = 767;

if ($(window).width() <= phone) {
    const address = document.querySelector('.address'),
        menu = document.querySelector('.menu'),
        search = document.querySelector('.search'),
        headerTop = document.querySelector('.header__top'),
        headerBottom = document.querySelector('.header__bottom');

    headerTop.removeChild(address);
    headerTop.removeChild(search);
    headerBottom.removeChild(menu);
    headerTop.insertBefore(menu, headerTop.firstElementChild);
    headerBottom.appendChild(address);
    headerBottom.appendChild(search);
}

