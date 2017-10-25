var message_plus = "C'est plus" ;
var message_moins = "C'est moins" ;
var min = 20;
var max = 80;


var fenetre=confirm("Bonjour voulez-vous jouer au Juste Prix?");
if (fenetre == false) {
	alert("Aurevoir...");
	if (false) {
	fenetre.close();
	}
}
else {

	var demande_chiffre = prompt("Donner moi un chiffre");

	function retour_num (){
		return Math.floor(Math.random()* (max - min) + min);
	}
	var arrondi = retour_num();
	console.log(arrondi);

	function jeu () {
		var demande_chiffre = prompt("Donner moi un chiffre");
		var nombre_essai = 0;
		if (demande_chiffre >20 && demande_chiffre <80) {
			while (demande_chiffre != arrondi) {	
				if (demande_chiffre < arrondi) {
				alert(message_plus);
				nombre_essai +=1;	
				}
				else if (demande_chiffre > arrondi) {				
				alert(message_moins);
				nombre_essai +=1;
				}
				demande_chiffre = prompt("Donner moi un chiffre");
			}
				if (demande_chiffre == arrondi) {
				alert("C'est gagné tu as trouvé en " + nombre_essai*2 + " coups!");
				}
				else {
				demande_chiffre = prompt("Donner moi un chiffre");	
				}
			
		}
		else {
			alert("Entrez un numéro entre 20 et 80");
		}
	}
jeu();
}



















// }