var body = document.getElementsByTagName("body");
console.log(body);

body = document.getElementsByTagName("body")[0].removeAttribute("class", "bg-aqua");

body = document.getElementsByTagName("body")[0].setAttribute("class", "bg-olive");

var firstParagraph = document.getElementById ("first-paragraph");
console.log(firstParagraph);

firstParagraph = document.getElementById("first-paragraph").removeAttribute("class", "bg-lime gray");

firstParagraph = document.getElementById("first-paragraph").setAttribute("class", "aqua");

classe_silver = document.getElementsByTagName("blockquote");
console.log(classe_silver);

classe_silver = document.getElementsByTagName("blockquote")[0].setAttribute("class", "bg-teal");

classe_silver = document.getElementsByTagName("blockquote")[0].removeAttribute("class", "bg-silver");

blockquote = document.getElementsByTagName("blockquote");
console.log(classe_silver);

blockquote = document.getElementsByTagName("blockquote")[0].setAttribute("class", "bg-white");