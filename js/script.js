// public/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('repos-container');
    
    // Variável para controlar a alternância da animação AOS e do alinhamento CSS
    let repoIndex = 0; 
    
    // PUXA OS REPOS DO SEU GITHUB
    fetch('https://api.github.com/users/ThiogoGambeta/repos')
        .then(res => res.json())
        .then(data => {
            // Opcional: Filtra repositórios que não são projetos (ex: seu próprio portfólio)
            const filteredData = data.filter(repo => repo.name !== 'My-PortFolio' && !repo.fork); 
            
            filteredData.forEach(repo => {
                
                // 1. Define o efeito AOS (Alterna entre fade-right e fade-left)
                const aosEffect = (repoIndex % 2 === 0) ? 'fade-right' : 'fade-left';
                
                // 2. Cria o cartão
                const card = document.createElement('div');
                card.className = 'repo-card';
                card.setAttribute('data-aos', aosEffect); // Aplica a animação
                
                // 3. Adiciona a classe 'inverte' para o CSS alternar o alinhamento de texto
                if (repoIndex % 2 !== 0) {
                    card.classList.add('inverte');
                }

                // ESTRUTURA SEM IMAGEM, FOCO TOTAL NO CONTEÚDO
                card.innerHTML = `
                    <div class="projeto-conteudo">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'Sem descrição disponível.'}</p>
                        <div class="projeto-links">
                            <a href="${repo.html_url}" target="_blank" class="btn">Ver Código (GitHub)</a>
                        </div>
                    </div>
                `;

                container.appendChild(card);
                repoIndex++; // Incrementa para alternar o próximo item
            });
            
            // Necessário para garantir que o AOS detecte elementos carregados via JS
            AOS.refresh(); 
        });

    // CÓDIGO DE BOTÕES DE SCROLL ANTERIOR FOI REMOVIDO!
});