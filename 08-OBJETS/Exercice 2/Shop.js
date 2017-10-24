// Caractéristique de chaque objet :
var epee = {
	"title": "l'épe de fer",
	"physic": 3,
	"magic" : 10,
	"minLevel" : 20,
	"available" : true,
}

var hache = {
	"title": "hache-R",
	"physic": 6,
	"magic" : 10,
	"minLevel" : 15,
	"available" : false,
}

var sceptre = {
	"title": "le sceptre d'ottokar",
	"physic": 9,
	"magic" : 15,
	"minLevel" : 9,
	"available" : true,
}

var fusil = {
	"title": "le fusilli",
	"physic": 10,
	"magic" : 5,
	"minLevel" : 12,
	"available" : false,
}

var kalachnikov = {
	"title": "Bam",
	"physic": 12,
	"magic" : 15,
	"minLevel" : 8,
	"available" : false,
}

// Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)
var MyObject = [epee, hache, sceptre, fusil, kalachnikov]; 

// //     faire une fonction pour afficher tous les objets
function giveItem () {
	for (i of MyObject) {
	console.log(i);
	}	 
}
giveItem();

//     faire une fonction pour afficher les objets disponibles
function itemAvailable () {
	for (i of MyObject) {
		if (i.available == true) {
			console.log(i);
		}
	}	 
}
itemAvailable();

//     faire une fonction pour afficher les objets dont le niveau minimum est de 10 
function itemMin () {
	for (i of MyObject) {
		if (i.minLevel <= 10) {
			console.log(i);
		}
	}
}
itemMin();