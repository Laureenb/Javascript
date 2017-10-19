// Utiliser la console ou les fonctions natives suivantes :

//     window.prompt();
//     window.alert();
//     window.confirm();

var mot=["P","E","N","D","U"];
var espaces =[" "," "," "," "," "];
var compteur=0;


function mot_a_deviner() {

	var enter= prompt("Entrez une lettre en majuscule entre A et Z");
	var enter= enter.toUpperCase();

if (enter.length !=1 ) {
	alert("Entrez seulement un caractère")
}	
else{
	if(mot.indexOf(enter) == -1) {
		alert("Introuvable!");
	}
	else {
		alert("Trouvé!");
		for (var i = 0; i < mot.length; i++) {
			if(enter==mot[i]);
		}
		compteur++;
	}
}







}
