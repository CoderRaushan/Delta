
let h1=document.querySelector("h1");
function colorchange(color, time) 
{
   return new Promise((resolve,failur)=>
   {
    setTimeout(()=>
    {
     h1.style.color=color;
     resolve();
    },time)
   })
}
// we can do like this  also
// colorchange( "red",1000)
// .then(()=>
// {
//     console.log("Color changed to red");
//    return colorchange( "yellow",1000);
// })
// .then(()=>
// {
//     console.log("Color changed to yellow");
//    return colorchange( "pink",1000);
// })
// .then(()=>
// {
//     console.log("Color changed to pink");
//    return colorchange( "blue",1000);
// }).then(()=>
// {
//     console.log("Color changed to blue");
// });

// we can do like this  also


async function fun1()
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
fun1();