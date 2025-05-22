document.addEventListener("DOMContentLoaded", function () {
    const username = "ThiogoGambeta";

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("repos-container");
            if (!container) {
                console.error("Elemento 'repos-container' não encontrado!");
                return;
            }

            data.forEach(repo => {
                const div = document.createElement("div");
                div.className = "repo-card";
                div.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "Sem descrição"}</p>
                    <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Erro ao carregar repositórios:", error));
});
