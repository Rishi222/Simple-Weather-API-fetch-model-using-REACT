import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({info}) {
  // Corrected direct image URL from Unsplash
  // const HAZE_URL =
  //   "https://images.unsplash.com/photo-1530809783266-c54e7919f95d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1519863436079-8436f74be632?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    // Icons for weather additional functionality.
  const RAIN_ICON=<BeachAccessIcon/>;
  const HOT_ICON =<WbSunnyIcon/>;
  const COLD_ICON=<AcUnitIcon/>;
  
  return (
    <>
      <div className="card">
       {/* this card is picked from materialUI */}
        <Card sx={{ maxWidth: 404 }}>
        {/* Change Image based on humidity or temp */}
          <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} title="Lizard" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {/* Change the icon based upon the weather */}
              {info.city} {info.humidity > 80 ? RAIN_ICON : info.temp > 15 ? HOT_ICON : COLD_ICON}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
            {/* Custom Settings just filling the infomation from api to info box */}
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempmin}</p>
              <p>Max Temp = {info.tempmax}</p>
              <p>
                The Weather can be describe like <i>{info.weather}</i> and Feels
                Like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
