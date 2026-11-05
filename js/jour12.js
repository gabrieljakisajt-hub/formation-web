// Variables
const prenom = "Awa";
let age = 20;
let estEtudiant = true;

console.log("Prénom :", prenom);
console.log("Âge :", age);
console.log("Étudiant :", estEtudiant);

// Modifier une variable déclarée avec let
age = age + 1;
console.log("Âge l'année prochaine :", age);

// Les types
console.log(typeof prenom);
console.log(typeof age);
console.log(typeof estEtudiant);

// Une variable sans valeur
let rien;
console.log(rien);

// Texte avec variables (template literal)
console.log(`Je m'appelle ${prenom} et j'ai ${age} ans.`);

// Calculs
console.log(7 + 3, 7 - 3, 7 * 3, 7 / 2, 7 % 2);

// Comparaisons
console.log(5 === 5, 5 === "5", 5 !== 3, 5 > 3);

// Le piège des types
console.log("5" + 3);
console.log("5" * 3);
console.log(Number("5") + 3);