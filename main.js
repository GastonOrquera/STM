let hamburger = document.querySelector('.hamburger');

let nav = document.querySelector('nav');

let navLinks = document.querySelectorAll('nav a');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            nav.classList.remove('active');

        });
    });
});


// SCROLL REVEAL PARA TITULOS

ScrollReveal().reveal('.scroll-revealTitles', {
    origin: 'top',
    distance: '10px',
    duration: 1000,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 200
});

// SCROLL REVEAL PARA PARRAFOS

ScrollReveal().reveal('.scroll-revealP', {
    origin: 'left',
    distance: '10px',
    duration: 600,
    esasing: 'cubic-bezier(0.5,0,0,1)',
    interval: 400
});

// SCROLL REVEAL PARA IMAGENES

ScrollReveal().reveal('.scroll-revealImgs', {
    origin: 'right',
    distance: '10px',
    duration: 2000,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 600
});

// SCROLL REVEAL PARA LI

ScrollReveal().reveal('.scroll-revealLi', {
    origin: 'left',
    distance: '10px',
    duration: 3000,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 600
});