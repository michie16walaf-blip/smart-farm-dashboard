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

});const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const workerId =
document.getElementById("workerId").value;

const password =
document.getElementById("password").value;

if(
workerId === "SF001" &&
password === "farm123"
){

alert("Login Successful");

window.location.href =
"index.html";

}
else{

alert(
"Invalid Worker ID or Password"
);

}

});

}
const complaintForm =
document.getElementById("complaintForm");

if(complaintForm){

complaintForm.addEventListener(

"submit",

function(e){

e.preventDefault();

alert(
"Complaint submitted successfully."
);

complaintForm.reset();

}

);

}
