// Une fonction simple
function direBonjour(prenom) {
  console.log("Bonjour " + prenom + " !");
}

direBonjour("Awa");
direBonjour("Moussa");

// Une fonction qui retourne une valeur
function additionner(a, b) {
  return a + b;
}

const total = additionner(4, 6);
console.log("Total :", total);

// Valeur par défaut
function saluer(prenom = "ami") {
  return `Salut ${prenom} !`;
}

console.log(saluer("Awa"));
console.log(saluer());

// Fonction avec conditions (AnimAI)
function nomFormat(format) {
  if (format === "vertical") {
    return "TikTok 9:16";
  } else if (format === "horizontal") {
    return "YouTube 16:9";
  } else if (format === "carre") {
    return "Carré 1:1";
  }
  return "Format inconnu";
}

console.log(nomFormat("vertical"));
console.log(nomFormat("carre"));
console.log(nomFormat("autre"));

// Fonction fléchée
const doubler = (n) => n * 2;
console.log(doubler(21));

// Une fonction qui en appelle une autre
function estimerScenes(duree) {
  return Math.round(duree / 6);
}

function resumer(duree, format) {
  return `${duree} s, ${nomFormat(format)}, environ ${estimerScenes(duree)} scènes`;
}

console.log(resumer(30, "vertical"));

// Portée des variables
const messageGlobal = "visible partout";

function testerPortee() {
  const messageLocal = "visible ici seulement";
  console.log(messageGlobal);
  console.log(messageLocal);
}

testerPortee();
console.log(typeof messageLocal);