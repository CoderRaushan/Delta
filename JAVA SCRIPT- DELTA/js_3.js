todo=[];
req=prompt("Enter your query:");
while(true)
{
    if(req=="quit")
    {
        console.log("quiting the app:");
        break;
    }
    else if(req=="add")
    {
        todo.push(prompt("enter your task to be add:"));
    }
    else if(req=="list")
    {
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
    }
    else if(req=="delete")
    {
        let idx=prompt("enter todo index to delete:");
        todo.splice(idx,1);
        console.log("successfully deleted:");
    }
    else
    {
      console.log("wrong request:");
    }
    req=prompt("Enter your query:");
}