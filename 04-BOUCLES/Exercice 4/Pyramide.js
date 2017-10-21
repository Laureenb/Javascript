etoile="*";

for (var i = 0; i <=4; i++){	
	// etoile = etoile + etoile;

	var result="";
	for (var j = 0; j <=i; j++){ //result= nombre d'etoiles par rapport a i
		result = result + etoile;
	}
	console.log(result);
}
