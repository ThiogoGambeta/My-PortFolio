// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('repos-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // PUXA OS REPOS DO SEU GITHUB
    fetch('https://api.github.com/users/ThiogoGambeta/repos')
        .then(res => res.json())
        .then(data => {
            data.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'repo-card slide';

                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Sem descrição disponível.'}</p>
                    <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                `;

                container.appendChild(card);
            });
        });

    // BOTÕES DE SCROLL
    const scrollAmount = 320;

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
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

