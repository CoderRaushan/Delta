import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp()
{
    let[weatherinfo,setweatherinfo]=useState
    ({
        city:"Ludhiana",
        feels_like:50,
        humidity: 80,
        pressure: 42,
        sea_level:24,
        temp: 47,
        temp_max:51,
        temp_min: 40,
        weather:"Cloudy",
    })
    let updateinfo=(result)=>
    {
        setweatherinfo(result);
    }
    return(
        <div>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}