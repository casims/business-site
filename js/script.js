'use strict';

const navCont = {
    menuExpanded: false,
    navListeners: function() {
        document.getElementById('nav-button').addEventListener('click', function() {
            navCont.menuExpanded = !navCont.menuExpanded;
            navCont.toggleMenu();
        });
        const header = document.querySelector('header');
        window.addEventListener('scroll', function() {
            if (window.scrollY === 0) {
                header.classList.remove('stickied');
            } else if (window.scrollY > 0 && !header.classList.contains('stickied')) {
                header.classList.add('stickied');
            };
        })
    },
    toggleMenu: function() {
        const navTarget = document.getElementById('nav-container');
        if (this.menuExpanded === true) {
            navTarget.classList.add('menu-open');
        } else {
            navTarget.classList.remove('menu-open');
        };
    },
};

window.onload = function() {
    navCont.navListeners();
};