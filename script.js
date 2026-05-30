const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.classList.toggle("active");

button.style.color =
button.classList.contains("active")
? "red"
: "black";

});

});