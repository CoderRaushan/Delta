// q1
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="click me";
let body=document.querySelector("body");
body.appendChild(input);
body.appendChild(button)
    //create id in element

// q2
input.setAttribute("placeholder","username");
input.setAttribute("id","inputhai");
button.setAttribute("id","btn1");
input.getAttribute("id"); //returns "inputhai"

// q3
let btn = document.querySelector("#btn1");
// btn.style.backgroundColor="blue";
// btn.style.color="white";
btn.classList.add("btn2");//css se change kar diye

 //q4
 let h1=document.createElement("h1");
 body.appendChild(h1);
 h1.innerText="DOM Practice";
 h1.setAttribute("id","h1");
 h1.classList.add("h1");

 // q5
 let p=document.createElement("p");
 body.appendChild(p);
 p.innerHTML="Apna College <b>delta</b> Practice";
