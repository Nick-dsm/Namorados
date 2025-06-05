const phrases = [
  'Em um tempo, foi-se dito que o amor reside dentro de mim',
  'Uma incompreensão, mas recebida pelo singelo jardim',
  'Tão oculto, guarda toda letra que me direcionou',
  'Em grande sentimento, vindo de alguém que pela primeira vez verdadeiramente amou',
  'Adentro do profundo, as pétalas dançam conforme o vento do amor',
  'Magestosa, linda, especial como minha amada flor',
  'O homem nasce puro, mas tu corrompestes-me, sem retorno. Arcará com as consequências destinadas ao ser que entrara num mundo de sonho?'
];

const fullPoemText = phrases.join("\n");
const acronymText = "EU TE AMO💚";

const button = document.getElementById("heart-button");
const phrase = document.getElementById("phrase");
const poemContainer = document.getElementById("poem-container");
const fullPoem = document.getElementById("full-poem");
const acronym = document.getElementById("acronym");

let currentIndex = 0;
let poemRevealed = false; // ← flag de controle

button.addEventListener("click", () => {
  phrase.style.display = "block";

  if (currentIndex < phrases.length - 1) {
    phrase.textContent = phrases[currentIndex];
    phrase.classList.remove("show");
    void phrase.offsetWidth;
    phrase.classList.add("show");
    currentIndex++;

    if (currentIndex === phrases.length - 1) {
      button.textContent = "💚";
    }

  } else if (currentIndex === phrases.length - 1) {
    phrase.textContent = phrases[currentIndex];
    phrase.classList.remove("show");
    void phrase.offsetWidth;
    phrase.classList.add("show");
    currentIndex++;
    button.textContent = "💚";
    button.classList.add("small-button");

  } else if (!poemRevealed) {
    phrase.style.display = "none";
    poemContainer.style.display = "block";
    poemContainer.classList.add("show"); // se usar animação
    fullPoem.innerText = fullPoemText;
    acronym.textContent = acronymText;
    poemRevealed = true;

    button.disabled = true;
    button.classList.add("fade-out");
  }
});
