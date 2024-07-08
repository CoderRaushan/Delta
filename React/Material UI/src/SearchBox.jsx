// for inp box
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// for send icon button
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function SearchBox()
{
    let[city,setcity]=useState("");
    const API_url="https://api.openweathermap.org/data/2.5/weather";
    const API_key="3946454d92a2e0a49cb3e134e46a847b";
    let getWeatherdata= async()=>
    {
        let result=await fetch(`${API_url}?q=city&appid=${API_key}&units=metric`);
        let jsonResponse=await result.json();
        console.log(jsonResponse);
        console.log(jsonResponse.main.temp);
    }
 
    let handlesearch=(event)=>
    {
        setcity(event.target.value);
    }
    let onsubmit=(event)=>
    {
        event.preventDefault();
        setcity("");
        getWeatherdata();
    }
    return(
       <div>
        <h2>Search for city</h2>
        <form onSubmit={onsubmit}>
        <TextField id="outlined-basic" label="Search a city" variant="outlined" required value={city} onChange={handlesearch}/>  <br /> <br />
        <Button variant='contained' size='small' color='success' type='submit'  endIcon={<SendIcon />}>Search</Button>
        </form>
       </div>
    )
}