var ul = document.querySelector("ul");
console.log(ul);

var li = document.createElement("li");

ul.appendChild(li);

li.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";

var li_a = document.querySelector("ul").querySelector("a");
console.log(li_a);

li_a.style.color = "yellow";