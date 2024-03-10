btn=document.querySelector(".add");
inp=document.querySelector("input");
ul=document.querySelector("ul");
btn.addEventListener("click",function()
{
   let item=document.createElement("li");
   item.innerText=inp.value;
   ul.appendChild(item);
   inp.value="";
   let delbtn=document.createElement("button");
    delbtn.textContent="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
});
ul.addEventListener("click", function (event) 
{
   if(event.target.nodeName=="BUTTON")
   {
    let delk=event.target.parentElement;
    console.log(delk);
    delk.remove();
   }
});