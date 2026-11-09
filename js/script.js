const carousel = document.getElementById('carousel');

document.querySelector('.left').addEventListener('click', () => {
    carousel.scrollBy({
        left: -250,
        behavior: 'smooth'
    });
});

document.querySelector('.right').addEventListener('click', () => {
    carousel.scrollBy({
        left: 250,
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

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá! Meu nome é ${nome}%0A%0A${mensagem}`;

    window.open(
        `https://wa.me/351960450575?text=${texto}`,
        '_blank'
    );
});