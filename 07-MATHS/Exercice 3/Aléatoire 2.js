//     La valeur aléatoire entre 50 et 100
function getRandom_exo1() {
	return Math.ceil(Math.random() * (100 - 50) + 50);
}
console.log(Math.ceil(Math.random() * (100 - 50) + 50));


//     La valeur aléatoire peut être seulement 0 ou 1
function getRandom_exo2() {
  return Math.random();
}
console.log(Math.random());


//    La valeur aléatoire peut aller de 0 à 10 inclu
function getRandom_exo3(min, max) {
	return Math.ceil(Math.random() * (10 - 0) + 0);
}
console.log(Math.ceil(Math.random() * (10 - 0) + 0));
