import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./Infobox.css";

function Infobox({ info }) {

    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee";
    const RAIN_URL = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";

    let imageURL =
        info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
                ? HOT_URL
                : COLD_URL;

    return (
        <div className='infobox'>
            <div className='cardcomponent'>
                <Card sx={{ width: 400, mx: "auto" }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={imageURL}
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {info.city} {info.humidity > 80
                                ? <ThunderstormIcon/>
                                : info.temp > 15
                                ? <SunnyIcon/>
                                : <AcUnitIcon/>}

                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Temperature: {info.temp}°C { }<br />
                            Humidity: {info.humidity}% <br />
                            Min Temp: {info.tempMin}°C <br />
                            Max Temp: {info.tempMax}°C <br />
                            Weather: <i>{info.weather}</i> <br />
                            Feels Like: {info.feelsLike}°C
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Infobox;