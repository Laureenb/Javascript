
//     window.prompt();
//     window.alert();
//     window.confirm();

var mot =["P","E","N","D","U"];
var espaces_rempli =[" "," "," "," "," "];
var compteur = 0;

var fenetre=confirm("Voulez-vous jouer au pendu?");
	if (fenetre == false) {
		alert("Aurevoir...");
		if (false) {
		fenetre.close();
	}
	}
	else {
    	
	function mot_a_deviner() {

			var enter= prompt("Entrez une lettre en majuscule entre A et Z");
			var enter= enter.toUpperCase();
		

		if (enter.length !=1 ) {
			alert("Entrez seulement un caractère")
		}	
		else {
			if(mot.indexOf(enter) == -1) {
				alert("Introuvable!");
			}
			else {
				alert("Trouvé!");
			for (var i = 0; i < mot.length; i++) {
			if(enter==mot[i]) {
			compteur++;
			alert("C'est la lettre de l'index" +i);
			espaces_rempli.slice(i, 1, mot);
			alert(espaces_rempli);
			}
			}
		}
	}
		if (compteur == mot.length) {
			alert("Vous avez gagné!");
		}
		else {
			mot_a_deviner();
		}
		mot_a_deviner();
	}
	mot_a_deviner();
}



// if (window.confirm("Une nouvelle fenêtre va s'ouvrir.")) { 
//     window.open("fenetre.html", "Nouvelle fenêtre", "");
// }