import React from "react";
import { createUseStyles } from "react-jss";
import Searchbar from "./components/Searchbar";
import AppHeader from "./components/AppHeader";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/ForecastBoard";

const useStyles = createUseStyles({
   app: {
      height: '100vh',
      width: '100vw',
      display: 'grid',
      gridTemplateRows: '2fr 5fr 3fr',
      margin: '0',
      padding: '0',
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
   const classes = useStyles();
   return (
      <div className={classes.app}>
         <div className="top-panel">
            <AppHeader />
            <Searchbar />
         </div>
         <div className="main-content">
            <WeatherInfo />
            <WeatherDetails />
         </div>
         <div className="bottom-panel">
            <Forecast />
         </div>
      </div>
   );
};

export default App;