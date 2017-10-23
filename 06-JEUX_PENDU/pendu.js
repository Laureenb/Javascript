var mot = ["P","E","N","D","U"];
var mot_en_cours = ["_","_","_","_","_"];
var erreurs = 0;
var max_erreurs = 5;

var fenetre=confirm("Voulez-vous jouer au pendu?");
	if (fenetre == false) {
		alert("Aurevoir...");
		if (false) {
		fenetre.close();
	}
	}
	else {


function jouerEncore(){
	return erreurs < max_erreurs;
};

function lettreDansMot(lettre){
	return mot.indexOf(lettre) >= 0; 
}

function remplacerLettre(lettre){
	for (var i = 0; i < mot.length; i++) {
		if(mot[i] == lettre){
			mot_en_cours[i] = lettre;
		}
	}
}

function devinerMot(){
	if (jouerEncore() == true) { //pas obliger d'écrire == true
		var lettre = prompt("mot actuel "+ mot_en_cours + "\nErreurs: " + erreurs + "\nEntrez votre lettre").toUpperCase();
		if (lettreDansMot(lettre) == true){
			remplacerLettre(lettre);
			if (mot_en_cours.indexOf("_") > -1) {
				devinerMot();
			}
			else{
				alert("Vous avez gagné!!!!!");
			}
		}
		else {
			erreurs= erreurs+1;
			devinerMot();
		}
	}
	else {
		alert("Game Over");
	}
};

devinerMot();

}