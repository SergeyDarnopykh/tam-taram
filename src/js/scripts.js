'use strict';

// Временное решение, пока не подключу класс Media
function isPhone() {
    return $(window).width() >= 320 && $(window).width() <= 767;
}

function isTablet() {
    return ($(window).width() >= 768) && ($(window).width() <= 991);
}

if (isPhone()) {
    const whereToFind = document.querySelector('.where-to-find'),
        menu = document.querySelector('.menu'),
        search = document.querySelector('.search'),
        headerTop = document.querySelector('.header__top'),
        headerBottom = document.querySelector('.header__bottom');

    headerTop.removeChild(whereToFind);
    headerTop.removeChild(search);
    headerBottom.removeChild(menu);
    //headerTop.insertBefore(menu, headerTop.firstElementChild);
    headerBottom.appendChild(whereToFind);
    headerBottom.appendChild(search);
}

if (isTablet()) {
    document.querySelector('.where-to-find_second-row').textContent = 'Chaltyr, 92101';
}

