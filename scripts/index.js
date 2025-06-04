const phrases = [
    'Em um tempo, foi-se dito que o amor reside dentro de mim',
    'Uma incompreenssão, mas recebida pelo singelo jardim',
    'Tão oculto, guarda toda letra que me direcionou',
    'Em grande sentimento, vindo de alguém que pela primeira vez verdadeiramente amou',
    'Adentro do profundo, as pétalas dançam conforme o vento do amor',
    'Magestosa, linda, especial como minha amada flor',
    'O homem nasce puro, mas tu corrompestes-me, sem retorno. Arcará com as consequências destinadas ao ser que entrara num mundo de sonho?'
  ];
  
  const button = document.getElementById("heart-button");
  const phrase = document.getElementById("phrase");
  
  button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * phrases.length);
    phrase.textContent = phrases[random];
  });
  