// 1. Fonction simple

function bienvenue() {
  console.log("Bienvenue dans la formation JavaScript");
}

bienvenue();


// 2. Fonction avec paramètres

function presenter(nom, age) {
  console.log("Nom :", nom);
  console.log("Age :", age);
}

presenter("Gabriel", 19);


// 3. Fonction avec return

function addition(a, b) {
  return a + b;
}

let resultat = addition(20, 30);

console.log("Résultat :", resultat);


// 4. Fonction avec condition

function verifierNote(note) {

  if (note < 10) {
    return "Échec";
  } else if (note < 15) {
    return "Bien";
  } else {
    return "Très bien";
  }

}

console.log(verifierNote(8));
console.log(verifierNote(12));
console.log(verifierNote(17));


// 5. Fonction avec boucle

function compter(nombre) {

  for (let i = 1; i <= nombre; i++) {
    console.log(i);
  }

}

compter(5);