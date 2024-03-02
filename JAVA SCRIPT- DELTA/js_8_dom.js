let heading=document.querySelector('h1');
heading.style.color="yellow";
heading.style.backgroundColor="black";
heading.style.marginLeft="3rem";
heading.style.fontSize="3rem";
// classlist used to add class aur id  of element  in html page
heading.classList;
heading.classList.add("avc");
//DOMTokenList ['avb', value: 'avb']    
heading.classList.remove("avc");
heading.classList.add("kya");
heading.classList.contains("kya");   //true
//toggle to add or remove class
heading.classList.toggle("avc");     //false
heading.classList.toggle("kay");     //true  kya added now
h1=document.querySelector("h1");
h1.parentElement;   //<div id="para">...
h1.childElement;    //null
h1.childElementCount;      //0
h1.parentElementCount;    //1

h1.previousElementSibling;//ul
h1.nextElementSibling; //h2

let pare=document.createElement ("p");
pare.textContent="mai ek paragraph hu";
let body=document.querySelector ("body");
body.appendChild(pare);
pare.append(" Hello World!"); //to add text in existing para

let container=document.querySelector('.container');
let h3=document.createElement ("h3");
container.appendChild(h3);
h3.innerText="hi i am text of h3";
// h3.innerHTML="<h1>HI</h1>";

let btn=document.createElement('button');
container.appendChild(btn);//last me append karta hai 
btn.textContent="click me";
btn.style.backgroundColor="red";
btn.style.color="white ";
btn.style.border="2px solid blue ";
btn.style.borderRadius="5em";
// container.prepend(btn);  //pahale append karta hai;
 container.insertAdjacentElement("beforebegin",btn); 
 container.insertAdjacentElement("afterend",btn);
 container.insertAdjacentElement("beforeend",btn);
 container.insertAdjacentElement("beforebegin",btn );
 body.removeChild(btn);
//  body.remove();//body removed
// btn.remove();//button removed
