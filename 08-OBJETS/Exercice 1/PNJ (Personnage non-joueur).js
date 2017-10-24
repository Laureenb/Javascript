
    // Crée un objet "Character" qui contient les informations suivantes :
    // name (string)
    // age (numero)
    // items_to_give (tableau)
    // afficher chaque information sur une ligne séparés dans la console (for in)
    // faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

let Character = {
	"name" : "Jesus",
	"age" : 33,
	"items_to_give" : ["croix", "baton", "vin", "pain"],
};

for(i in Character.items_to_give){		
			console.log(Character.items_to_give[0]);
			console.log(Character.items_to_give[1]);
			console.log(Character.items_to_give[2]);
			console.log(Character.items_to_give[3]);
};

function giveItem (){	
		var rand_index = Character.items_to_give[Math.floor(Math.random()*4)];
  		return console.log(rand_index);
};
giveItem();
