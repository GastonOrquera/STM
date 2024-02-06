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