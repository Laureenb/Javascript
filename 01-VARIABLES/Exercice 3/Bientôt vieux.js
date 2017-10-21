var age=33;
var ageMax=100;
var aliment="tasses de café";
var consommation=3;
var annees_restantes=ageMax-age;
var jours_restants=annees_restantes*365;
var conso_restante=jours_restants*consommation;
var resultFinal="Il vous reste " + conso_restante + " " + 
aliment + " avant d'atteindre l'âge de " + ageMax + ".";
console.log (resultFinal);