let btn=document.querySelector("button");
btn.onclick=function()
{
    alert("button is clicked");
}


// aise bhi likh sakte hai
let hello=function()
{
    alert("helooiii");
}
btn.onclick=hello;

// loop lagake sare button ko ek bar me kaam kara sakte hai 
let allbtn=document.querySelectorAll("button");
for(btn of allbtn)
{
    btn.onclick=hello;
    btn.onmouseenter=function()
    {
        // window.location.href ="https://rausnotes39.netlify.app";
    }
}
   // evenet  listener  
btn.addEventListener("click",function()
{
alert ("event listner click");
});





