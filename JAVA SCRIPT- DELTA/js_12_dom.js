let btn=document.querySelector("button");
btn.addEventListener("click",function()
{
console.log(this);
console.dir(this);
console.log(this.innerText);
this.style.backgroundColor="blue";
this.style.color="white"
});

// for  multiple ele 
// let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
function color()
{
console.log(this);
console.dir(this);
console.log(this.innerText);
this.style.backgroundColor="blue";
this.style.color="white";
}
btn.addEventListener("click",color);
h1.addEventListener("click",color);
h3.addEventListener("click",color);



// click event
btn.addEventListener( "click", function (event)
{
console.log(event);
console.log ("Button clicked");
});
btn.addEventListener("dblclick", function (event)
{
console.log(event);
console.log ("Button clicked");
});


// input keydown
let inp = document.querySelector('input');
inp.addEventListener ('keydown', function(e){
    console.log("key was presseed:");
});
// input updaown
let inp1 = document.querySelector('input');
inp1.addEventListener ('keyup', function(e){
    console.log("key was presseed:");
}); 
let inp2 = document.querySelector('input');
inp2.addEventListener ('keydown', function(event){
    console.log("key is:",event.key);
    console.log("key code is:",event.code);


}); 