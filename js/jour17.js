// 1. Un clic change le texte
const message = document.querySelector("#message");
const btnMessage = document.querySelector("#btn-message");

btnMessage.addEventListener("click", () => {
  message.textContent = "Bonjour ! Tu as appuyé.";
});

// 2. Un compteur
const compteur = document.querySelector("#compteur");
let nombre = 0;

function afficherCompteur() {
  compteur.textContent = nombre;
}

document.querySelector("#btn-plus").addEventListener("click", () => {
  nombre = nombre + 1;
  afficherCompteur();
});

document.querySelector("#btn-moins").addEventListener("click", () => {
  if (nombre > 0) {
    nombre = nombre - 1;
  }
  afficherCompteur();
});

document.querySelector("#btn-zero").addEventListener("click", () => {
  nombre = 0;
  afficherCompteur();
});

// 3. Afficher / cacher
const aide = document.querySelector("#aide");

document.querySelector("#btn-basculer").addEventListener("click", () => {
  aide.classList.toggle("cache");
});

// 4. Réagir pendant la frappe
const champ = document.querySelector("#idee");
const nbCaracteres = document.querySelector("#nb-caracteres");

champ.addEventListener("input", () => {
  nbCaracteres.textContent = champ.value.length;
});