'use strict';

// Временное решение, пока не подключу класс Media
function isPhone() {
    return $(window).width() >= 320 && $(window).width() <= 767;
}

function isTablet() {
    return ($(window).width() >= 768) && ($(window).width() <= 1091);
}

// import {Media} from './Media.js';
// const Media = require('./Media');

function changeVisibility(elem) {
    if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    } else {
        elem.className += ' hidden';
    }
}

if (isPhone()) {
    const whereToFindUs = document.querySelector('#whereToFindUs'),
        menu = document.querySelector('#menu'),
        search = document.querySelector('#search'),
        header = document.querySelector('#header'),
        headerTop = document.querySelector('#headerTop'),
        headerBottom = document.querySelector('#headerBottom'),
        hamburger = document.querySelector('#hamburger');

    headerTop.removeChild(whereToFindUs);
    headerTop.removeChild(search);
    headerBottom.removeChild(menu);
    header.insertBefore(menu, headerBottom);
    headerBottom.appendChild(whereToFindUs);
    headerBottom.appendChild(search);


    menu.className += ' hidden';
    hamburger.classList.remove('hidden');
    hamburger.onclick = function () { changeVisibility(menu); };
}

if (isTablet()) {
    document.querySelector('#whereToFindUsSecondRow').textContent = 'Chaltyr, 92101';
}

