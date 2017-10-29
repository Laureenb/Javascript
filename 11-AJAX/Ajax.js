//Pour charger le fichier 
(function() { //quand le document est ready- tous les elements de la page sont chargés
  var xhttp = new XMLHttpRequest(); //creation d'un nouvel objet xmlhttprequest
  xhttp.onreadystatechange = function() { // on va attrapper un événement pour exécuter le code
  	//console.log("ajax call done: readyState: " + xhttp.readyState + " status:" + xhttp.status );
    if (this.readyState == 4 && (this.status == 200 || this.status == 0)) {
     	//document.getElementById("demo").innerHTML = this.responseText;// ecriture en pure texte dans un div
     	var output = "";
		var items = JSON.parse(this.responseText);//convertir le texte recu en objets pour pouvoir les manipuler


// //Ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
// var tableau = arr.map(fonction callback(this.responseText,[0], items) { // Element de retour pour nouveauTableau [, thisArg])
	var itemsWithScore = items.map(function(item){ 
	  var newItem = item;
	  newItem['score'] = Math.floor((Math.random()* 1000) + 1); 
	  return newItem;
	});

// //Classer l'odre du tableau selon les scores tip : arr.sort()
itemsWithScore.sort(function(a, b) {
    return parseInt(a.score) - parseInt(b.score);
});

// //Mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
var catA = [];
var catB = [];
var catC = [];
itemsWithScore.forEach(function(element) {
	if (element.score > 750) {
		catA.push(element);
	}
	else if (element.score > 500) {
		catB.push(element);
	}
	else {
		catC.push(element);
	}
});

//Compter combien de personne viennent du "Bahrain" 
var itemsFiltered = itemsWithScore.filter(function(element) {
    return element.country == "Bahrain";
});

//Afficher le plus grand score 
//Afficher le plus petit score 
var sortedItems = itemsWithScore.sort(function(a, b) {
    return parseInt(a.score) - parseInt(b.score);
});

//Pour afficher les éléments avec un score aléatoire classé du plus petit au plus grand
		// itemsWithScore.forEach(function(item) {
		// 	output += item.name + " - " + item.country + " - " + item.score + "<br>";
		// });
		// document.getElementById("demo").innerHTML = output;

		// itemsWithScore.forEach(function(item) {
		// 	output += item.name + " - " + item.country + " - " + item.score +"<br>";
		// });

//Pour afficher par catégories
		var output = "";
		catA.forEach(function(item) {
			output += item.name + " - " + item.country + " - " + item.score +"<br>";
		});
		document.getElementById("elementsCatA").innerHTML = output;		
		output = "";
		catB.forEach(function(item) {
			output += item.name + " - " + item.country + " - " + item.score +"<br>";
		});
		document.getElementById("elementsCatB").innerHTML = output;		
		output = "";
		catC.forEach(function(item) {
			output += item.name + " - " + item.country + " - " + item.score +"<br>";
		});
		document.getElementById("elementsCatC").innerHTML = output;		

//Compter combien de personne viennent du "Bahrain" 
		// output = "";
		// itemsFiltered.forEach(function(item) {
		// 	output += item.name + " - " + item.country + " - " + item.score + "<br>";
		// });
		// document.getElementById("demo2").innerHTML = output;

//Afficher le plus petit score 
		// var minItem = sortedItems[0];
		// document.getElementById("demo4").innerHTML = minItem.name + " - " + minItem.country + " - " + minItem.score ; 

//Afficher le plus grand score
		// var maxItem = sortedItems[sortedItems.length-1];
		// document.getElementById("demo5").innerHTML = maxItem.name + " - " + maxItem.country + " - " + maxItem.score ;
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
})();