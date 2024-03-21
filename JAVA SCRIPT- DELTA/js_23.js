
let h1=document.querySelector("h1");

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>
{
    let para=document.querySelector("p");
    let fact=await get();
    para.innerText=fact;
})
let url1 = "https://catfact.ninja/fact";
async function get() 
{
    try 
    {
        // let res = await fetch(url1);
        // let data = await res.json();
        let res=await axios.get(url1);
        return res.data.fact;
    }
    catch (err) 
    {
        return "Some error occured!";
    }
}   
