'use strict';

const navCont = {
    observer: new IntersectionObserver(
        ([e]) => e.target.classList.toggle("stickied", e.intersectionRatio < 1),
        {threshold: [1]}
    ),
    menuExpanded: false,
    navListeners: function() {
        document.getElementById('nav-button').addEventListener('click', function() {
            navCont.menuExpanded = !navCont.menuExpanded;
            navCont.toggleMenu();
        });
        this.observer.observe(document.querySelector("header"));
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