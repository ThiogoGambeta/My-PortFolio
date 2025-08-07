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
