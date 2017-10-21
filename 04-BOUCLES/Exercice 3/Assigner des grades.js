
//     // Écrire une boucle qui va itérer de 0 à 100
//     // Écrire une fonction qui va retourner des grades selon les scores reçu
//     //     si le score au dessus de 90 le grade est A
//     //     si le score au dessus de 80 le grade est B
//     //     si le score au dessus de 70 le grade est C
//     //     si le score au dessus de 65 le grade est D
//     //     si le score n"entre pas dans ces catégories le grade est F"
//     // afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".


// //Avec une fonction
// function afficher_grade(i){
// 	if (i>90) {
// 	console.log ("Vous avez"+" "+i+" "+"points grade A");
// 	}
//     else if (i>=80 && i<90) {
// 	console.log ("Vous avez"+" "+i+" "+"points grade B");
// 	}
//     else if (i>=70 && i<80) {
//     console.log ("Vous avez"+" "+i+" "+"points grade C");
//     } 
//     else if (i>=65 && i<70) {
//     console.log ("Vous avez"+" "+i+" "+"points grade D");
//     }
//     else {
//     console.log ("Vous avez"+" "+i+" "+"points grade F"); 
//     }
// }
// afficher_grade(80);


// //Avec une boucle
// for (var i = 0; i <=100; i++) { 
//     if (i>90) {
//     console.log ("Vous avez"+" "+i+" "+"points grade A");
//     }
//     else if (i>=80 && i<90) {
//     console.log ("Vous avez"+" "+i+" "+"points grade B");
//     }
//     else if (i>=70 && i<80) {
//     console.log ("Vous avez"+" "+i+" "+"points grade C");
//     } 
//     else if (i>=65 && i<70) {
//     console.log ("Vous avez"+" "+i+" "+"points grade D");
//     }
//     else {
//     console.log ("Vous avez"+" "+i+" "+"points grade F"); 
//     }
// }

// //Function et Boucle
// function maFonction (grade){

// for (var i = 0; i <= 100; i++) {
//     if (grade >= 90){
//     console.log("pour " + grade + " points, vous avez le grade A");
//     }

//     else if (grade < 90 && grade>= 80){
//     console.log("pour " + grade + " points, vous avez le grade B");
//     }

//     else if (grade  < 80 && grade >= 70){
//         console.log("pour " + grade + " points, vous avez le grade C");
//     }

//     else if (grade  < 70 && grade >= 65){
//         console.log("pour " + grade + " points, vous avez le grade D");
//     }

//     else{
//         console.log("pour " + grade + " points, vous avez le grade F");
//     }
// }

// }
// var nb = prompt("entrez un nombre");
// maFonction(nb);


function retour_grade (param) {
    var result;
    if (param >= 90) {
        result="A";
    }
     else if (param < 90 && param>= 80) {
        result="B";
    }
     else if (param < 80 && param >= 70) {
        result="C";
    }
     else if (param < 70 && param >= 65) {
        result="D";
    }
     else {
        result="F";
    }
    return result;
}

for (var i = 0; i <= 100; i++) {
    console.log("Pour " + i +  " vous avez le grade " + retour_grade(i) );
}