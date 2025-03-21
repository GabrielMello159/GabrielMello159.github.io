// Animação de fade-in para os itens de navegação quando a página carregar
window.addEventListener('load', () => {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2 + 0.5}s`;  // Delay progressivo para cada item
        item.classList.add('fade-in');
    });
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
console.log("JavaScript está funcionando!");