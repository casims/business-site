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
    accordHeightCollapsed: '6.5rem',
    accordExpand: function(accord) {
        let accordHeight = accord.scrollHeight;
        accord.style.height = accordHeight + 'px';
        accord.setAttribute('expanded', 'true');
    },
    accordCollapse: function(accord) {
        accord.style.height = this.accordHeightCollapsed;
        accord.setAttribute('expanded', 'false');
    },
    accordListeners: function() {
        // Functionality for accordians on individual project page, also expands first accordian on page load
        let accordSections = document.getElementsByClassName('accord');
        let accordButtons = document.getElementsByClassName('accord-button');
        navCont.accordExpand(accordSections[0]);
        for (let i = 0; i < accordButtons.length; i++) {
            accordButtons[i].addEventListener('click', function(event) {
                let accordTarget = event.target.parentElement;
                let isAccordExpanded = accordTarget.getAttribute('expanded') === 'true';
                if (!isAccordExpanded) {
                    for (let accordSection of accordSections) {
                        navCont.accordCollapse(accordSection);
                    };
                    navCont.accordExpand(accordTarget);
                } else {
                    navCont.accordCollapse(accordTarget);
                };
            });
        };
    },
};

window.onload = function() {
    navCont.navListeners();
    navCont.accordListeners();
};