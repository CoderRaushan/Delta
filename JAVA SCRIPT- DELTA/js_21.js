
let h1=document.querySelector("h1");
function colorchange(color, time) 
{
   return new Promise((resolve,failur)=>
   {
    setTimeout(()=>
    {
      let num=Math.floor(Math.random()*10)+1;
      if(num<5)
      {
        failur("Error in generating random number")
      }
     h1.style.color=color;
     console.log("color is changed to",color);
     resolve("Color has been changed!");
    },time)
   })
}
async function fun1()
{
  try
  {
    await colorchange("red",1000);
    await colorchange("green",1000);
    await colorchange("blue",1000);
    await colorchange("yellow",1000);
    await colorchange("white",1000);
    await colorchange("black",1000);
    await colorchange("pink",1000);
    await colorchange("gray",1000);
    await colorchange("voilet",1000);
    colorchange("orange",1000);
  }
  catch(error)
  {
     console.log("error caught", error);
  }
   let a=4;
   let b=4;
   console.log("the sum is:",a+b);
}
fun1(); 