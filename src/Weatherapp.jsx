import Searchbox from './Searchbox'
import Infobox from './Infobox'
import { useState } from 'react';
function Weatherapp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 20.37,
        humidity: 30,
        temp: 21.39,
        tempMax: 21.39,
        tempMin: 21.39,
        weather: "clear sky"
    });
let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo);
}

    return(
        <div style={{textAlign:'center'}}>
            <h1>Weather App</h1>
            <br />
            <Searchbox updateInfo={updateInfo}/>
            <br />
            <Infobox info={weatherInfo}/>
        </div>

    )
}
export default Weatherapp;