// Exercices 1
//     Crée (en HTML) une DIV avec l'id "character"
//     Faire changer de couleur de fond a cette DIV à chaque fois qu'on appuie sur une numéro de 
//     0 à 9 sur le clavier
//     Tip : utiliser le switch

var body = document.getElementsByTagName("body")[0];
var character = document.getElementById("character");

body.addEventListener("keyup", function(event){
console.log("keyup:",event.key,typeof(parseInt(event.key)));
  switch(parseInt(event.key)) {
    case 0:
      character.style.backgroundColor = "darkgrey";
      break;
    case 1:
      character.style.backgroundColor = "yellow";
      break;
    case 2:
      character.style.backgroundColor = "green";
      break;
    case 3:
      character.style.backgroundColor = "black";
      break;
    case 4:
      character.style.backgroundColor = "olive";
      break;
    case 5:
      character.style.backgroundColor = "darkblue";
      break;
    case 6:
      character.style.backgroundColor = "purple";
      break;
    case 7:
      character.style.backgroundColor = "white";
      break;
    case 8:
      character.style.backgroundColor = "brown";
      break;
    case 9:
      character.style.backgroundColor = "lightblue";
      break;
    default :
  }
});

// Exercices 2
//     Crée (en HTML) 4 divs avec les id suivantes : "up, down, left, right"
//     crée une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
//     Pour chaque div ajouter la classe 'highlight' quand une des touches directionel est enfoncée
//     Pour chaque div retier la classe 'highlight' quand on relâche la touche
//     Tip : Faire la structure HTML sans JavaScript

var haut = document.getElementById("up");
var bas = document.getElementById("down");
var droite = document.getElementById("right");
var gauche = document.getElementById("left");

body.addEventListener("keydown", function(event){
var fleche = event.key;
console.log(fleche);
switch (fleche) {
    case "ArrowUp":
      haut.classList.add("highlight");
      break;
    case "ArrowLeft":
      gauche.classList.add("highlight");
      break;
    case "ArrowDown":
      bas.classList.add("highlight");
      break;
    case "ArrowRight":
      droite.classList.add("highlight");
      break;
    default:break;
    return;
}
});

body.addEventListener("keyup", function(event){
var fleche = event.key;
console.log(fleche);
switch (fleche) {
    case "ArrowUp":
      haut.classList.remove("highlight");
      break;
    case "ArrowLeft":
      gauche.classList.remove("highlight");
      break;
    case "ArrowDown":
      bas.classList.remove("highlight");
      break;
    case "ArrowRight":
      droite.classList.remove("highlight");
      break;
    default:
    return;
}
});