// 1. Trouver des éléments
const titre = document.getElementById("titre");
const message = document.querySelector("#message");
const astuces = document.querySelectorAll(".astuce");
const liste = document.querySelector("#liste-scenes");

// 2. Changer le texte
titre.textContent = "Bonjour depuis JavaScript !";
message.textContent = "Ce texte a été changé par mon programme.";

// 3. Changer le style
titre.style.color = "#b45309";
message.style.fontWeight = "bold";

// 4. Ajouter une classe CSS
message.classList.add("surligne");

// 5. Parcourir plusieurs éléments
astuces.forEach((astuce, index) => {
  astuce.textContent = `Astuce numéro ${index + 1}`;
});

// 6. Créer des éléments à partir d'un tableau
const scenes = [
  { numero: 1, decor: "village", texte: "Awa voit une ombre." },
  { numero: 2, decor: "forêt", texte: "Elle suit les traces." },
  { numero: 3, decor: "rivière", texte: "Elle sauve le village." },
];

scenes.forEach((scene) => {
  const li = document.createElement("li");
  li.textContent = `Scène ${scene.numero} (${scene.decor}) : ${scene.texte}`;
  liste.append(li);
});

// 7. Supprimer un élément
astuces[1].remove();