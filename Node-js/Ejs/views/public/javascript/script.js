let btns=document.querySelectorAll("button");
for(btn of btns)
{
   btn.addEventListener("click",()=>
   {
    btn.style.backgroundColor="blue";
   });
}