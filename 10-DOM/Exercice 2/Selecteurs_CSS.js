table = document.querySelector("#my-table");
console.log(table);

table = document.querySelector("#my-table").setAttribute("class", "bg-purple");

container = document.querySelectorAll("p");
console.log(table);

o = container.length; 
for (var i = 0; i < o ; i++) {
container = document.querySelectorAll("p")[i].setAttribute("class", "shadow");	
};
