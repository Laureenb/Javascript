var score=prompt("Quel est ton score?");
var rang;

if (score>=90) {
	rang="A";
}
else if (score<90 && score>50) {
	rang="B";
}
else if (score<=50) {
	rang="C";
}
alert("Vous avez le rang " + rang);