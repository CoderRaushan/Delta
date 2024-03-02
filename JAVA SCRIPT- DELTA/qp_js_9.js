
// q1
let paragraph=document.createElement("p");
let body=document.querySelector("body");
body.appendChild(paragraph);
paragraph.innerText="Hey i am red text!";
paragraph.style.color="red";
// q2
let h3=document.createElement("h3");
body.appendChild(h3);
h3.innerText="i am h3";
h3.style.color="blue";
//q3
let container=document.createElement("div");
body.prepend(container);//appendchild
container.classList.add("container1");
let h1=document.createElement("h1");
container.appendChild(h1);
h1.innerText="i'm in a div";
let p=document.createElement("p");
container.appendChild(p);
p.innerText="i'm too";