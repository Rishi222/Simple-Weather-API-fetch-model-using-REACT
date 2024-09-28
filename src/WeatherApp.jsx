import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    // the weather state changes here .
    const [weatherInfo, setWeatherInfo] = useState({
        //default set to use weatherinfo.
      city: "Delhi",
      temp: 25.05,
      tempmin: 25.05,
      tempmax: 25.05,
      humidity: 47,
      feelsLike: 24.84,
      weather: "haze",
    });

    // here we update the weather based on some new info from api to infobox
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
  return (
    <>
        {/* Here we search for weather */}
      <SearchBox updateInfo={updateInfo}/>
      {/* here we show informatin about the weather */}
      <InfoBox info={weatherInfo}/>
    </>
  );
}
