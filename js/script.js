'use strict';

const navCont = {
    menuExpanded: false,
    navListeners: function() {
        document.getElementById('nav-button').addEventListener('click', function() {
            navCont.menuExpanded = !navCont.menuExpanded;
            navCont.toggleMenu();
        });
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