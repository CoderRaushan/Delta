import { useState } from "react"

export default function Form()
{
    let[fullName,setfullName]=useState("");
    let[UserName,setUserName]=useState("");
    let handleNameChange=(event)=>{
        setfullName(event.target.value);
    }
   
    let handleUserName=(event)=>{
        setUserName(event.target.value);
    }
    return(
        <form action="">
            <label htmlFor="fullname">FullName:</label>
            <input type="text" name="name" value={fullName} id="fullname" onChange={handleNameChange}/>
            <br />
            <label htmlFor="UserName">UserName:</label>
            <input type="text" name="name" value={UserName} id="UserName" onChange={handleUserName}/> <br />
            <button>submit</button>
        </form>
    )
}