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

const acronymText = "EU TE AMO";  // frase final
const fullPoemText = phrases.join("\n");

// elementos 
const button = document.getElementById("heart-button");
const phrase = document.getElementById("phrase");
const poemContainer = document.getElementById("poem-container");
const fullPoem = document.getElementById("full-poem");
const acronym = document.getElementById("acronym");

// variável de controle
let currentIndex = 0;  
let poemRevealed = false;

// script dos versos
button.addEventListener("click", () => {
  

  // ainda há versos
  if(currentIndex < phrases.length){
    phrase.style.display = "block";
    phrase.textContent = phrases[currentIndex];
    phrase.classList.add("show");
    currentIndex++;

    // última linha, fim
    if(currentIndex === phrases.length){
      button.textContent = "Mais...";
    }

    // revela poema completo
  } else if(!poemRevealed){
    phrase.style.display = "none"; // esconde última linha
    poemContainer.style.display = "block";
    fullPoem.innerText = fullPoemText;
    acronym.textContent = acronymText;
    poemRevealed = true;
    

    // tchau botão (* ocultar)
    button.disabled = true;
    button.style.opacity = "0.5"; // * ocultar => button.style.display = "none";
  }
});
  
  