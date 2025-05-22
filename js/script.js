// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    
    function rotateCarousel() {
        const slides = document.querySelectorAll('.carrossel .slide');
        const totalSlides = slides.length;
        
        index = (index + 1) % totalSlides;
        
        const offset = -index * 220;  // Ajuste de 220px para cada slide
        document.querySelector('.carrossel').style.transform = `translateX(${offset}px)`;
    }

    // Rodar a cada 3 segundos
    setInterval(rotateCarousel, 3000);
});


/*=============================SOBRE MIM TEXTO AUTOMATICO=============================*/

function resetTypingAnimation() {
    const spans = document.querySelectorAll('.typing span');
    spans.forEach(span => {
        span.style.opacity = 0;
    });

    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        }, index * 1000); // mesmo tempo dos delays no CSS
    });
}

    // Inicia e repete a cada 10 segundos (ajuste conforme necessário)
resetTypingAnimation();
setInterval(resetTypingAnimation, 100);

