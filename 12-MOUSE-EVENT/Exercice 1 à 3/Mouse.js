// Exercices 1
//	   Crée (en HTML) 3 DIV possedant la même classe 'hoverMe'
//     Faire disparaitre les divs lorsque l'on passe la souris dessus
//     Tip : utiliser le mouseenter ou mouseover
var hoverMe = document.getElementsByClassName("hoverMe");
for (button of hoverMe) {
	button.addEventListener("mouseover", function(event) {
		this.classList.add("disparition");
    	console.log(event);
	})	
};

// Exercices 2
//     Crée (en HTML) une DIV avec une l'id "reset"
//     Faire de sorte que quand on clique dessus elle fasse réaparaitre les 3 divs premièrement créé
//     Tip : avec une animation ce serait super cool
var reset = document.getElementById("reset");
reset.addEventListener("click",function () {
  for (button of hoverMe) {
    button.classList.remove("disparition");
  }
})

// Exercices 3
//     Crée (en HTML) 2 DIV avec une id chacune 'axe-x' et 'axe-y'
//     Faire de sorte que lorsque l'on bouge la souris dans la fenêtre, 
//     la position sois affiché dans les divs associés
// //     Tip : Utiliser l'evenement reçu en argument Tip : Utiliser innerHTML ou innerText
var xxx = document.getElementById ("axe_x");
// var axe_y = document.getElementsByClassName ("axe_y");
xxx.addEventListener ("mousemove", function (event) {
	console.log(event);
	document.getElementById("axe_x").innerHTML = "mousemove X:"+ event.clientY;
	document.getElementById("axe_y").innerHTML = "mousemove X:"+ event.clientX;
})