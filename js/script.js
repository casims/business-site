'use strict';

const navCont = {
    menuExpanded: false,
    navListeners: function() {
        document.getElementById('nav-button').addEventListener('click', function() {
            navCont.menuExpanded = !navCont.menuExpanded;
            console.log(this.menuExpanded);
            navCont.toggleMenu();
        });
    },
    toggleMenu: function() {
        const navTarget = document.getElementById('nav-container');
        if (this.menuExpanded === true) {
            navTarget.style.height = '100vh';
        } else {
            navTarget.style.height = '5.5rem';
        };
    },
};

window.onload = function() {
    navCont.navListeners();
};