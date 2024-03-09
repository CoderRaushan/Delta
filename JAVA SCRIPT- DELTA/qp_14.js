
let btn=document.createElement ("button");
btn.textContent="click me";
let body=document.querySelector("body");
body.appendChild(btn);
btn.addEventListener( "click",function()
{
    btn.style.backgroundColor="green";
});

let inp=document.querySelector("input");
let h2=document.querySelector("h2");
inp.addEventListener("input", function()
{
    let userinp=inp.value;
    let cleanedInput = userinp.replace(/[^a-zA-Z\s]/g, '');
    h2.innerText=cleanedInput;
}); 