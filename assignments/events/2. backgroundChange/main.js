//selection
//we are adding event on document directly

//adding event
//after subscribing click event on document, handleClick() function will be called 

document.addEventListener("click", handleClick);

//manipulation

function handleClick() {
    document.body.style.backgroundColor = "black";
}