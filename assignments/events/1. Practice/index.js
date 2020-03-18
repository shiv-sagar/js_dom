//Select the section with an id of container without using querySelector.

let container = document.getElementById("container");


//Select the section with an id of container using querySelector.

let container = document.querySelector("#container");

//Select all of the list items with a class of "second".

let allLi = document.querySelectorAll(".second")

//Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdLi = document.ol.querySelector("third");

//Give the section with an id of container the text "Hello!".

let sec = document.querySelector("container");
sec.textContent = "Hello!"



//Add the class main to the div with a class of footer.

document.querySelector(".footer").classList.add("main");

//Remove the class main on the div with a class of footer.

document.querySelector(".footer").classList.remove("main");


//Create a new li element.

let newLi = document.createElement("li");

//Give the li the text "four".

newLi.textContent = "four";

//Append the li to the ul element.

document.querySelector("ul").append(newLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".

let ol = document.querySelector("ol").children;

ol.forEach(val => val.style.backgroundColor = "green");

//Remove the div with a class of footer.

document.querySelector(".footer").remove();