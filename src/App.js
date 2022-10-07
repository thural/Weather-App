import React, {useState, useEffect} from "react";
import { createUseStyles } from "react-jss";
import Searchbar from "./components/Searchbar";
import AppHeader from "./components/AppHeader";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/ForecastBoard";
import {initialWeather, initialForecast} from "../src/initData"
const useStyles = createUseStyles({
   app: {
      height: '100vh',
      width: '100vw',
      display: 'grid',
      gridTemplateRows: '2fr 5fr 3fr',
      margin: '0',
      padding: '0',
      fontFamily: `-apple-system, BlinkMacSystemFont,
       'Segoe UI', 'Roboto', 'Oxygen', 
       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif`,
      '& .top-panel': {
         display: 'flex',
         flexFlow: 'row nowrap',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'deepskyblue',
         gap: '2rem'
      },
      '& .main-content': {
         gap: '2rem',
         display: 'flex',
         flexFlow: 'row nowrap',
         alignItems: 'center',
         justifyContent: 'space-between',
         backgroundColor: 'purple',
         padding: '3rem'
      },
      '& .bottom-panel': {
         padding: '3rem',
         backgroundColor: 'magenta'
      }
   },

})

const App = () => {

   const fetchWeather = async (city) => {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
      &appid=ed6790ff52b78b1ba5862b88ef094090&units=metric`);
      const info = await data.json();
      setWeather(info);
      console.log(info)
    };

    const fetchForecast = async (city) => {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}
      &exclude="minutely,hourly"&appid=ed6790ff52b78b1ba5862b88ef094090&units=metric`);
      const info = await data.json();
      setForecast(info);
      console.log(info)
    };

    const [weather, setWeather] = useState(initialWeather);
    const [forecast, setForecast] = useState(initialForecast)
    
    //useEffect(() => { fetchWeather('London') }, []);
  
    const handleSearch = (action) => {
      action.preventDefault();
      const city = action.target.search.value;
      fetchWeather(city)
   };


   const classes = useStyles();
   return (
      <div className={classes.app}>
         <div className="top-panel">
            <AppHeader />
            <Searchbar handleSearch={handleSearch}/>
         </div>
         <div className="main-content">
            <WeatherInfo weather={weather}/>
            <WeatherDetails weather={weather}/>
         </div>
         <div className="bottom-panel">
            <Forecast />
         </div>
      </div>
   );
};

export default App;