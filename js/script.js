'use strict';

const navCont = {
    menuExpanded: false,
    navListeners: function() {
        document.getElementById('nav-button').addEventListener('click', function() {
            navCont.menuExpanded = !navCont.menuExpanded;
            navCont.toggleMenu();
        });
        window.addEventListener('scroll', function() {
            navCont.navClassToggle();
        });
    },
    navClassToggle: function() {
        const header = document.querySelector('header');
        if (window.scrollY === 0) {
            header.classList.remove('stickied');
        } else if (window.scrollY > 0 && !header.classList.contains('stickied')) {
            header.classList.add('stickied');
        };
    },
    toggleMenu: function() {
        const navTarget = document.getElementById('nav-container');
        if (this.menuExpanded === true) {
            navTarget.classList.add('menu-open');
        } else {
            navTarget.classList.remove('menu-open');
        };
    },
    accordHeightCollapsed: '5rem',
    accordExpand: function(accord) {
        let accordHeight = accord.scrollHeight;
        accord.style.height = accordHeight + 'px';
        accord.setAttribute('expanded', 'true');
        accord.classList.add('expanded');
    },
    accordCollapse: function(accord) {
        accord.style.height = this.accordHeightCollapsed;
        accord.setAttribute('expanded', 'false');
        accord.classList.remove('expanded');
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
        // Collapses all open acoordians on window resize, prevents cut off text when section 
        window.addEventListener('resize', function() {
            for (let accordSection of accordSections) {
                if (accordSection.getAttribute('expanded') === 'true') {
                    navCont.accordExpand(accordSection);
                };
            };
        });
    },
    pageChecker: function() {
        const hostName = 'http://127.0.0.1:5500/';
        let capturedURL = window.location.href;
        let planType = null;
        if (capturedURL === hostName) {
            this.accordListeners();
        } else if (capturedURL.includes(hostName + 'services.html')) {
            this.accordListeners();
        } else if (capturedURL === hostName + 'plans.html' || capturedURL === hostName + 'plans.html#standard') {
            planType = 'standard';
            this.createPlanPage(planType);
        } else if (capturedURL === hostName + 'plans.html#pro') {
            planType = 'pro';
            this.createPlanPage(planType);
        };
    },
    standardPlanPage: `
        <section class="hero-section plans dark">
            <p class="heading-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam nemo dolor beatae corporis.</p>
            <p>Vitae nobis ducimus quas officia temporibus sint iusto sapiente corporis ipsa fuga, recusandae natus iure ad optio architecto ipsum quibusdam debitis adipisci. Minus nobis porro cum, itaque amet corporis facere iste? Eligendi, voluptates, mollitia dolores.</p>
            <button type="button" class="contact-button dark">Get Started</button>
            <div id="plans-animation-container"></div>
        </section>
        <section class="main-section plans dark">
            <h3>Standard Plan</h3>
            <p class="heading-subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam blanditiis nisi veritatis odio explicabo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, architecto saepe in inventore aliquam impedit ad praesentium, non optio vero unde voluptatum nostrum, culpa quae. Repellendus, debitis soluta. Voluptatibus, sapiente.</p>
        </section>
        <!-- VIDEO/IMG HERE -->
        <section class="features-section plans dark">
            <ul id="plans-expandable-list">
                <li class="accord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                    <h3 class="accord-button">Live Quoting</h3>
                    <p>Fusce quis ante vel neque elementum consequat. Phasellus luctus sapien sit amet tellus commodo interdum. Ut consectetur porttitor elit ac facilisis. Morbi nec turpis enim. Nam lacus ante, imperdiet sed ipsum ut, viverra elementum purus. Etiam ut quam pharetra, consectetur nibh vel, tincidunt justo. Vestibulum suscipit orci at semper condimentum.</p>
                </li>
                <li class="accord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                    <h3 class="accord-button">Efficent Execution</h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tempor turpis mi, ac vulputate ipsum ullamcorper nec. Suspendisse sodales lectus tristique justo iaculis, non laoreet arcu volutpat. Donec est orci, sagittis in felis eget, rutrum tempor nisi. Vestibulum in sagittis magna. Ut ullamcorper dolor eu euismod convallis.</p>
                </li>
                <li class="accord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                    <h3 class="accord-button">Seamless Integration</h3>
                    <p>Nam finibus tellus nec lectus ultrices elementum. Proin tortor massa, ultricies in enim ut, scelerisque laoreet tortor. Cras quis suscipit nulla. Phasellus efficitur eros non sagittis facilisis. Quisque molestie lectus a blandit bibendum. Pellentesque ultricies sapien at ex efficitur efficitur. Quisque eget turpis quam.</p>
                </li>
            </ul>
        </section>`,
    proPlanPage: `
        <section class="hero-section pro plans">
            <p class="heading-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam nemo dolor beatae corporis.</p>
            <p>Vitae nobis ducimus quas officia temporibus sint iusto sapiente corporis ipsa fuga, recusandae natus iure ad optio architecto ipsum quibusdam debitis adipisci. Minus nobis porro cum, itaque amet corporis facere iste? Eligendi, voluptates, mollitia dolores.</p>
            <button type="button" class="contact-button">Get Started</button>
            <div id="plans-animation-container"></div>
        </section>
        <section class="main-section pro plans">
            <h3>Pro Plan</h3>
            <p class="heading-subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam blanditiis nisi veritatis odio explicabo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, architecto saepe in inventore aliquam impedit ad praesentium, non optio vero unde voluptatum nostrum, culpa quae. Repellendus, debitis soluta. Voluptatibus, sapiente.</p>
            <div class="video-wrapper">
                <video autoplay loop muted preload>
                    <source src="media/videos/city_pan.mp4" type="video/mp4">
                </video> 
            </div>
        </section>
        <section class="features-section pro plans">
            <ul id="plans-expandable-list">
                <li class="accord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                    <h3 class="accord-button">Live Quoting</h3>
                    <p>Fusce quis ante vel neque elementum consequat. Phasellus luctus sapien sit amet tellus commodo interdum. Ut consectetur porttitor elit ac facilisis. Morbi nec turpis enim. Nam lacus ante, imperdiet sed ipsum ut, viverra elementum purus. Etiam ut quam pharetra, consectetur nibh vel, tincidunt justo. Vestibulum suscipit orci at semper condimentum.</p>
                </li>
                <li class="accord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                    <h3 class="accord-button">Efficent Execution</h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tempor turpis mi, ac vulputate ipsum ullamcorper nec. Suspendisse sodales lectus tristique justo iaculis, non laoreet arcu volutpat. Donec est orci, sagittis in felis eget, rutrum tempor nisi. Vestibulum in sagittis magna. Ut ullamcorper dolor eu euismod convallis.</p>
                </li>
                <li class="accord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                    <h3 class="accord-button">Seamless Integration</h3>
                    <p>Nam finibus tellus nec lectus ultrices elementum. Proin tortor massa, ultricies in enim ut, scelerisque laoreet tortor. Cras quis suscipit nulla. Phasellus efficitur eros non sagittis facilisis. Quisque molestie lectus a blandit bibendum. Pellentesque ultricies sapien at ex efficitur efficitur. Quisque eget turpis quam.</p>
                </li>
            </ul>
            <p class="heading-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a esse <span>eligendi magni expedita natus.</span></p>
            <ul class="features-list plans">
                <li>
                    <h4>Molestiae Ullam</h4>
                    <p>Consequatur saepe sint ut veritatis. Perspiciatis culpa quae incidunt voluptatibus corrupti veniam delectus numquam, sunt debitis facere, vel reiciendis itaque nihil modi.</p>
                </li>
                <li>
                    <h4>Tenetur Ex</h4>
                    <p>Fugiat non accusamus molestiae esse quibusdam consequatur magnam odio quam? Incidunt velit inventore obcaecati porro quam odio odit maxime debitis omnis deleniti.</p>
                </li>
                <li>
                    <h4>Adipisci Suscipit</h4>
                    <p>Tempore, excepturi molestiae beatae necessitatibus eveniet facilis reprehenderit eaque assumenda in sint fugit iste nam recusandae vitae placeat sit nobis. Unde, hic.</p>
                </li>
                <li>
                    <h4>Perferendis Debitis</h4>
                    <p>Provident nam iusto consectetur incidunt, quam dolore. Nulla laudantium quisquam cupiditate quod dignissimos reiciendis rerum dolore, nam enim illum dolorum quaerat hic.</p>
                </li>
            </ul>
        </section>`,
    createPlanPage: function(type) {
        const planHTMLTarget = document.querySelector('div#plan-container');
        const titleSection = document.querySelector('section.title-section');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const stanButton = document.querySelector('button#standard-button');
        const proButton = document.querySelector('button#pro-button');
        if (type === 'standard') {
            planHTMLTarget.innerHTML = this.standardPlanPage;
            header.classList.add('dark');
            titleSection.classList.add('dark');
            stanButton.classList.add('active');
            proButton.classList.remove('active');
            footer.classList.add('dark');
            this.accordListeners();
        } else if (type === 'pro') {
            planHTMLTarget.innerHTML = this.proPlanPage;
            header.classList.remove('dark');
            titleSection.classList.remove('dark');
            stanButton.classList.remove('active');
            proButton.classList.add('active');
            footer.classList.remove('dark');
            this.accordListeners();
        };
        stanButton.addEventListener("click", function() {
            window.location.hash = '#standard';
            scroll(0,0);
        });
        proButton.addEventListener("click", function() {
            window.location.hash = '#pro';
            scroll(0,0);
        });
    },
};

window.onload = function() {
    navCont.navListeners();
    navCont.navClassToggle();
    navCont.pageChecker();
};

window.onhashchange = function() {
    navCont.pageChecker();
};