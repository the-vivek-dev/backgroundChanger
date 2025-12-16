let container = document.querySelector(".container");
let body = document.querySelector("body"); 

container.addEventListener("click" , (event)=>{
       body.style.backgroundColor =  event.target.id;
})