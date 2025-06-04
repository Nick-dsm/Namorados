// array com o poema em frases
const phrases = [
  'Em um tempo, foi-se dito que o amor reside dentro de mim',
  'Uma incompreenssão, mas recebida pelo singelo jardim',
  'Tão oculto, guarda toda letra que me direcionou',
  'Em grande sentimento, vindo de alguém que pela primeira vez verdadeiramente amou',
  'Adentro do profundo, as pétalas dançam conforme o vento do amor',
  'Magestosa, linda, especial como minha amada flor',
  'O homem nasce puro, mas tu corrompestes-me, sem retorno. Arcará com as consequências destinadas ao ser que entrara num mundo de sonho?'
];

// script que imprime poema
const fullPoemText = phrases.join("\n");
const acronymText = "EU TE AMO";  // frase final

// elementos 
const button = document.getElementById("heart-button");
const phrase = document.getElementById("phrase");
const poemContainer = document.getElementById("poem-container");
const fullPoem = document.getElementById("full-poem");
const acronym = document.getElementById("acronym");

// variável base
let currentIndex = 0;  

button.addEventListener("click", () => {
  phrase.style.display = "block";

  if(currentIndex < phrases.length){
    phrase.textContent = phrases[currentIndex];
    phrase.classList.add("show");
    currentIndex++;

    // ultima frase, segue:
    if(currentIndex === phrases.length){
      setTimeout(() => {
        phrase.style.display = "none";
        fullPoem.innerText = fullPoemText;
        acronym.textContent = acronymText;
        poemContainer.style.display = "block";
      }, 1000); // delay pra suavizar
    }
  }
});
  
  