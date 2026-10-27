const carousel = document.getElementById('carousel');

document.querySelector('.left').addEventListener('click', () => {
    carousel.scrollBy({
        left: -230,
        behavior: 'smooth'
    });
});

document.querySelector('.right').addEventListener('click', () => {
    carousel.scrollBy({
        left: 230,
        behavior: 'smooth'
    });
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});