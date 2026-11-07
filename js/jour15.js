// Tableaux
const styles = ["BD", "Feutre", "Dessin animé"];

console.log(styles);
console.log(styles[0]);
console.log(styles.length);

styles.push("Aquarelle");
console.log(styles);

const dernier = styles.pop();
console.log(dernier);
console.log(styles);

console.log(styles.includes("BD"));
console.log(styles.join(" | "));

// Parcourir un tableau
for (const style of styles) {
  console.log("Style :", style);
}

// forEach, map et filter avec des fonctions fléchées
const durees = [15, 30, 120];

durees.forEach((d) => console.log("Durée :", d));

const enMinutes = durees.map((d) => d / 60);
console.log(enMinutes);

const courtes = durees.filter((d) => d <= 30);
console.log(courtes);

// Objets
const personnage = {
  nom: "Awa",
  age: 12,
  village: "Baobab",
  courageuse: true,
};

console.log(personnage.nom);
console.log(personnage["village"]);

personnage.age = 13;
personnage.couleur = "orange";
console.log(personnage);

// Tableau d'objets : un petit scénario
const scenes = [
  { numero: 1, decor: "village", texte: "Awa voit une ombre." },
  { numero: 2, decor: "forêt", texte: "Elle suit les traces." },
  { numero: 3, decor: "rivière", texte: "Elle sauve le village." },
];

for (const scene of scenes) {
  console.log(`Scène ${scene.numero} (${scene.decor}) : ${scene.texte}`);
}

console.log(scenes.length, "scènes");

// Transformer en JSON
console.log(JSON.stringify(scenes[0]));