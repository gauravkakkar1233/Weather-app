import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import "./Searchbox.css"
import { useState } from 'react';

function Searchbox({ updateInfo }) {
    console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_BASE_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getweatherinfo = async (cityName) => {
        try {
            let response = await fetch(
                `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            let jsonresponse = await response.json();

            let result = {
                city: cityName,
                temp: jsonresponse.main.temp,
                tempMin: jsonresponse.main.temp_min,
                tempMax: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                feelsLike: jsonresponse.main.feels_like,
                weather: jsonresponse.weather[0].description
            };

            return result;

        } catch (err) {
            throw err;
        }
    };

    let handlechange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    let handlesubmit = async (evt) => {
        evt.preventDefault();

        try {
            let newinfo = await getweatherinfo(city);
            updateInfo(newinfo);
            setCity("");
        }
        catch (err) {
            setError(true);
        }
    };

    return (
        <div className='Searchbox'>
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

                {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                        No such place exists!
                    </p>
                )}
            </form>
        </div>
    );
}

export default Searchbox;