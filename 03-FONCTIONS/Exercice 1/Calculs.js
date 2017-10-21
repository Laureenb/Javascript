//Soustraction
var a = 10;
var b = 5;
function soustraction (x,y){
	return x-y;
}
console.log("résultat soustraction: " + soustraction(a,b));

//Division
// a= 20;
// b= 2;
function division (x,y){
	return x/y;
}
console.log("résultat division: " + division(a,b));

//Multiplication
a= 3;
b= 4;
function multiplication (x,y){
	return x*y;
}
console.log("résultat multiplication: " + multiplication(a,b));

//Pourcentage
var valeur= 10;
var pourcent= 50;
function pourcentage (valeur,pourcent){
	return valeur*pourcent/100;
} 
var result =pourcentage(valeur,pourcent);
console.log("résultat pourcentage: " + result + "%");


//Vitesse
var distance= 100;
var temps= 2;
function vitesse (distance,temps){
	return distance/temps;
}
result = vitesse(distance,temps);
console.log("résultat vitesse: " + result + " km/h");