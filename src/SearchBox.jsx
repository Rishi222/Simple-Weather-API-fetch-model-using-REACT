import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./SearchBox.css"

export default function SearchBox({ updateInfo }) {
  // to set city 
  const [city, setCity] = useState(""); // Correct use of useState
  // to set error 
  const [error,setError] = useState(false);
  // Api defining
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "264b02cc918c8ea595529796f8eaed78";
  // ?q={city name}&appid={API key}

  // getweatherinfo function to trigger api and fetch info asyncronously.
  let getWeatherInfo = async () => {
    try{
      // trigger api.
    let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    // conver responce into json.
    let jsonResponce = await responce.json();
    //print responce
    console.log(jsonResponce);

    //here we extract inforamtion from converted json responce.
    let result = {
      city: city,
      temp: jsonResponce.main.temp,
      tempmin: jsonResponce.main.temp_min, 
      tempmax: jsonResponce.main.temp_max,
      humidity: jsonResponce.main.humidity,
      feelsLike: jsonResponce.main.feels_like,
      weather: jsonResponce.weather[0].description,
    };

    //just print the responce.
    console.log(result);
    //return the result back.
    return result;
    }catch(err){
      throw error;
    }
  };

  //here we set the setcity with value.
  let handleChange = (evt) => {
    setCity(evt.target.value); // Correctly updating the state
  };

  // here we handlesubmit info async function because we send new info to other.
  let handleSubmit = async (evt) => {
    // this is use to prevents the default state of
    evt.preventDefault();
    try {
      // print city.
      // console.log(city);
      //setting newinfo to updateinfo
      let newinfo = await getWeatherInfo();
      if(newinfo){
        updateInfo(newinfo);
        setError(false); // reset the city after submit.
      }
      //after work reset to empty.
      setCity(""); // Resetting the input after submission.
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>
          Search for Weather By <u>City Name</u>
        </h2>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 465,
          }}
        >
        {/* Input field for serach bar */}
          <InputBase
            className="input"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search City"
            inputProps={{ "aria-label": "search city" }}
            onChange={handleChange}
            value={city} // Controlled input field with state value
          />
        </Paper>
        <br />
        <Button variant="contained" size="small" type="submit">
          <SearchIcon /> Search
        </Button>
        {/* If error occur then this will trigger */}
        {error && (
          <>
            <p>
              <u style={{color:"red"}}>No Such Place is Exist.</u>
            </p>
          </>
        )}
      </form>
    </>
  );
}
