document.addEventListener("DOMContentLoaded", function () {
  const textoEl = document.getElementById("textoAnimado");
  const frases = ["Thiogo Antonio Gambeta", "Dev Full-Stack"];
  let fraseIndex = 0;
  let charIndex = 0;
  let apagando = false;

  function digitar() {
    const fraseAtual = frases[fraseIndex];

    if (!apagando) {
      if (charIndex < fraseAtual.length) {
        textoEl.textContent += fraseAtual.charAt(charIndex);
        charIndex++;
        setTimeout(digitar, 100);
      } else {
        setTimeout(() => {
          apagando = true;
          setTimeout(digitar, 50);
        }, 1200);
      }
    } else {
      if (charIndex > 0) {
        textoEl.textContent = fraseAtual.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(digitar, 50);
      } else {
        apagando = false;
        fraseIndex = (fraseIndex + 1) % frases.length;
        setTimeout(digitar, 300);
      }
    }
  }

  digitar();
});
