
//     crée un tableau qui contetient 3 nom d'acteurs
//     Pour chaque acteur, afficher dans la console par 
//     exemple : "Le numero 1 est Stalone"
// Bonus:transformer en : "Le premier est Stalone", 
//Le deuxième est Cruiz", etc...
var my_array = ["Nicolas Cage", "Johnny Depp", "Jude Law"];

for (var i = 0; i < my_array.length; i++){

	total = "Le numéro "+ [i] + " "+ "est " + my_array[i];
	console.log(total);	
}