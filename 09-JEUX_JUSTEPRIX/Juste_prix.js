// Utiliser la console ou les fonctions natives suivantes :

//     window.prompt();
//     window.alert();
//     window.confirm();



//  Variable qui sera utilisée pour afficher un message
//  Variable qui va compter le nombre d'essais
//  Variable de la valeur minimum qu'on peut entrer (ici 20)
//  Variable de la valeur maximale qu'on peut entrer (ici 80)
var message_plus = "C'est plus" ;
var message_moins = "C'est moins" ;
var message = "C'est gagné tu as trouvé en " + nombre_essai + " coups!" ;
var nombre_essai;
var saisie;
var min = 20;
var max = 80;
var juste = retour_num();

var fenetre=confirm("Bonjour voulez-vous jouer au Juste Prix?");
	if (fenetre == false) {
		alert("Aurevoir...");
		if (false) {
		fenetre.close();
	}
	}
	else {


//  crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale 
//  et la variable maximale
// function retour_num (){
// 	var arrondi = Math.floor(Math.random()* (max - min) + min);
//     return arrondi;
// }
// retour_num();

// //   crée une fonction qui prends un argument pour tester si le numéro qu'on a entré est le bon
// //   la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste 
// //   tu as trouvé en X coups
// function test(numéro){
// 	if (numéro == juste){
// 		console.log(message);
// 	}
// 	else if (numéro > 33){
// 		console.log(message_moins);
// 	}
// 	else {
// 		console.log(message_plus);
// 	}
// }








}