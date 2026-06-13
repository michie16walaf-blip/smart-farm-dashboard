function openModal(){
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function toggleMenu(){
document.querySelector(".sidebar").classList.toggle("show");
}

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(item=>{

item.addEventListener("click",()=>{

const panel =
item.querySelector(".panel");

if(panel.style.display==="block"){
panel.style.display="none";
}
else{
panel.style.display="block";
}

});

});
