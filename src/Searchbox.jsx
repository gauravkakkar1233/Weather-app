import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import "./Searchbox.css"
import { useState } from 'react';

function Searchbox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);   

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a1fd5fbeacf29342870c2278caa99c35";

    let getweatherinfo = async (cityName) => {
        try{
        let response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);
        let result={
            city: cityName,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        };
        console.log(result);
        return result;
    }
    catch(err){
        throw err;
    }
    }

    let handlechange = (evt) => {
        setCity(evt.target.value);
    }

    let handlesubmit = async (evt) => {
        try{
        evt.preventDefault();
        setCity("");
        let newinfo=await getweatherinfo(city);
        updateInfo(newinfo);
        }
        catch(err)
        {
            setError(true);
        }
    }

    return (
        <div className='Searchbox'>
            {/* <h2>Search for the web</h2> */}
            <form onSubmit={handlesubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handlechange}
                />
                <br /><br />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exist</p>}
            </form>
        </div>
    )
}

export default Searchbox;