let h1=document.querySelector("h1");
 
function colorchange(color,delay,nextcolor)
{
    setTimeout(()=>
    {
       h1.style.color=color;
       nextcolor();
    },delay)
}

colorchange("red",1000,()=>
{
    colorchange("yellow",1000,()=>
    {
        colorchange("green",1000,()=>
        {
            colorchange("purple",1000,()=>
            {
                colorchange("yellow",1000,()=>
                {
                    colorchange("black",1000);
                });
            });
        });
    });
});