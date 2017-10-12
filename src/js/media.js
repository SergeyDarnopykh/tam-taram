'use strict';

class Media {
    constructor() {
        this.xsMin = 320;
        this.smMin = 768;
        this.mdMin = 992;
        this.lgMin = 1200;

        this.xsMax = this.smMin - 1;
        this.smMax = this.mdMin - 1;
        this.mdMax = this.lgMin - 1;
    }

    isPhone() {
        return $(window).width() >= this.xsMin && $(window).width() <= this.xsMax;
    }

    isTablet() {
        return ($(window).width() >= this.smMin) && ($(window).width() <= this.smMax);
    }

    isDesktop() {
        return $(window).width() >= this.mdMin && $(window).width() >= this.mdMax;
    }
}

module.exports = Media;
