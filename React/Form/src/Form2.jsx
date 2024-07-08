import { useState } from "react"

export default function Form()
{
    let[FormData,setFormData]=useState({
        fullName:"",
        UserName:"",
        Password:"",
    });
    let handleInputChange=(event)=>
    {
        let fieldName=event.target.name;
        let fieldData=event.target.value;
        setFormData((currdata)=>
        {
            currdata[fieldName]=fieldData;
            return {...currdata};
        });
    }
    let submithandle=(event)=>{
        event.preventDefault();
        setFormData
        ({
            fullName:"",
            UserName:"",
            Password:""
        })
    };
    return(
        <form action="" onSubmit={submithandle}>
            <label htmlFor="fullname">FullName:</label>
            <input type="text" name="fullName" value={FormData.fullName} id="fullname" onChange={handleInputChange}/>
            <br />
            <label htmlFor="UserName">UserName:</label>
            <input type="text" name="UserName" value={FormData.UserName} id="UserName" onChange={handleInputChange}/> <br />
            <label htmlFor="Password">Password:</label>
            <input type="password" name="Password" value={FormData.Password} id="Password" onChange={handleInputChange}/>
            <br />
            <button>submit</button>
        </form>
    )
}