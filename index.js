const phrases = [
   'Em meu anseio, há o sentimento que carrego',
   'Um jardim, de tudo aquilo que me almejo',
   'Tão singelas, as pétalas sobrevoam ao vento profundo',
   'Em dança pelo meu feliz tormento',
   'A tênue diversão sáfica, que preenche meu intímo oculto',
   'Mais do que desejo, há o gosto pelo '
  ];
  
  const button = document.getElementById("heart-button");
  const phrase = document.getElementById("phrase");
  
  button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * phrases.length);
    phrase.textContent = phrases[random];
  });
  