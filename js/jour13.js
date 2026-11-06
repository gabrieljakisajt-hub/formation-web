// Conditions
const age = 17;

if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

// Plusieurs cas
const duree = 30;

if (duree === 15) {
  console.log("Histoire courte");
} else if (duree === 30) {
  console.log("Histoire standard");
} else {
  console.log("Durée non prévue");
}

// Opérateurs logiques
const aUneIdee = true;
const aUnFormat = false;

console.log(aUneIdee && aUnFormat);
console.log(aUneIdee || aUnFormat);
console.log(!aUneIdee);

if (aUneIdee && aUnFormat) {
  console.log("Prêt à générer");
} else {
  console.log("Il manque quelque chose");
}

// Boucle for
for (let scene = 1; scene <= 5; scene++) {
  console.log("Scène", scene);
}

// Boucle while
let credits = 3;
while (credits > 0) {
  console.log("Il reste", credits, "crédit(s)");
  credits = credits - 1;
}
console.log("Plus de crédits");

// break et continue
for (let n = 1; n <= 10; n++) {
  if (n === 3) {
    continue;
  }
  if (n === 6) {
    break;
  }
  console.log("n =", n);
}