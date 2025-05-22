document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-contato");
    const btn = document.getElementById("btn-contato");
    const span = document.querySelector(".modal .close");
    const form = document.getElementById("form-contato");

    btn.onclick = () => {
        modal.style.display = "block";
    };

    span.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        fetch("https://formsubmit.co/ajax/thiogogambeta@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                mostrarMensagemSucesso();
            } else {
                alert("Erro ao enviar mensagem. Tente novamente.");
            }
        })
        .catch(error => {
            alert("Erro ao enviar mensagem. Verifique sua conexão.");
        });
    });

    function mostrarMensagemSucesso() {
        const mensagem = document.createElement("div");
        mensagem.style.position = "fixed";
        mensagem.style.top = "50%";
        mensagem.style.left = "50%";
        mensagem.style.transform = "translate(-50%, -50%)";
        mensagem.style.background = "#1a1a2e";
        mensagem.style.padding = "30px";
        mensagem.style.borderRadius = "10px";
        mensagem.style.boxShadow = "0 0 15px black";
        mensagem.style.color = "white";
        mensagem.style.zIndex = "10001";
        mensagem.innerHTML = `
            <p style="font-size: 18px;">Mensagem enviada com sucesso!</p>
            <button id="ok-btn" style="margin-top: 10px; padding: 8px 16px; background: #a97bff; border: none; border-radius: 5px; color: white; cursor: pointer;">OK</button>
        `;

        document.body.appendChild(mensagem);

        document.getElementById("ok-btn").onclick = () => {
            window.location.href = "/";
        };
    }
});
