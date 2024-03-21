let brn=document.querySelector("button");

brn.addEventListener("click",async()=>
{    let cont=document.querySelector("input").value;
    let res= await getcollege(cont);
    showdata(res);
})
function showdata(res)
{       
   
    let ul=document.querySelector("ul");
    ul.innerText="";
    for(result of res)
    {
        // console.log(result.name);
        let li=document.createElement("li");
        li.innerText=result.name;
        ul.appendChild(li);
       
    }
}
let url="http://universities.hipolabs.com/search?name=";
async function getcollege(cont)
{
try
{
let res=await axios.get(url+cont);
// console.log(res);
return res.data;    
}
catch(err)
{
 console.log("error occur:");
 return [];
}
}