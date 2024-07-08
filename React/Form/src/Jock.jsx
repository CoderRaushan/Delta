import { useState,useEffect } from "react";

export default function Joke()
{
   let [joke,setjoke]=useState({});
   let url="https://v2.jokeapi.dev/joke/Any";
   const generatejoke= async()=>
   {
    let response=await fetch(url);
    let jsonresponse= await response.json();
    console.log(jsonresponse);
    setjoke({setup:jsonresponse.setup,delivery:jsonresponse.delivery});
   }

//    for first time display joke
    useEffect(()=>
    {
        async function firsttimejoke ()
        {
            let response=await fetch(url);
            let jsonresponse= await response.json();
            console.log(jsonresponse);
            setjoke({setup:jsonresponse.setup,delivery:jsonresponse.delivery});
        }
        firsttimejoke() 

    },[]);
    return(

        <div>
            <h1>Joke API Demonstraion</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.delivery}</h3>
            <button onClick={generatejoke} style={{backgroundColor:"black",color:"white"}}>Generate Joke</button>
        </div>
    )
}