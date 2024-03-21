

let img=document.querySelector("img")
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>
{   
    let source=await get();
    img.setAttribute("src", source); 
})
let url2 ="https://dog.ceo/api/breeds/image/random";
async function get() 
{
    try 
    {
        // let res = await fetch(url1);
        // let data = await res.json();
        const response = await axios.get(url2);
        return response.data.message;
    }
    catch (err) 
    {
        return "error in dog image";
    } 
}   
