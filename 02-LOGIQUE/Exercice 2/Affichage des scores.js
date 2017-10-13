var score=55;
var resultat= prompt("Quel est ton score?");

if (score>=90) {
	console.log ("Vous avez le rang A si vous avez un score égal ou supérieur a 90");
}

else if (score<90 && score>50) {
	console.log ("Vous avez le rang B si vous avez un score inférieur a 90");
}

else if (score<=50) {
	console.log ("Vous avez le rang C si vous avez un score inférieur ou égal a 50");
}
