var ol = document.querySelector("ol");
console.log(ol);

while (ol.firstChild) {
	ol.removeChild(ol.firstChild);
};

var tableau = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (var i = 0; i < tableau.length; i++) {
	var each = document.createElement("li"); 
	ol.appendChild(each);
	each.innerHTML = tableau[i];
};