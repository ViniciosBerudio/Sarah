function mostrarMensagem() {
    const texto = `
  Meu amor,
  
  Você sabe que eu não sou muito bom com palavras, e que o certo mesmo seria escrever uma cartinha — como você sempre me pede. Mas dessa vez quis fazer algo diferente, algo mais a minha cara... e feito de coração. 💖
  
  Preparei isso com carinho, e prometo que vou guardar esse arquivo num lugar especial, pra que a gente nunca perca. Porque ele representa muito pra mim... representa *nós*.
  
  Você tem me ajudado a ser uma pessoa melhor todos os dias. Já são 6 anos juntos — e mesmo que não tenham sido os mais fáceis, foram sempre vividos *juntos*. E isso é o que importa pra mim.
  
  Eu te amo demais. E quero passar muitos, muitos outros anos ao seu lado. Você é o meu “reset”, a minha força, meu recomeço sempre que algo dá errado ou quando eu preciso mudar.
  
  Obrigado por sempre estar aqui. Por me apoiar, por acreditar em mim, por não desistir.
  
  Essa música linda que você vai ouvir... é pra você. Sempre que escuto, lembro de nós dois. ❤️
  
  Eu te amo. Muito.
  – Seu momoi❤️
    `;
    document.getElementById("mensagem").textContent = texto;
  }
  
  function tocarMusica() {
    const audio = document.getElementById("musica");
    audio.play();
  }
  
  document.querySelectorAll('.fotos img').forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const imgAmpliada = document.getElementById('img-ampliada');
      imgAmpliada.src = img.src;
      lightbox.style.display = 'block';
    });
  });
  
  function fecharLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      fecharLightbox();
    }
  });