import React from "react";
import { createUseStyles } from "react-jss";
import Icon from '@mdi/react';
import { mdiWeatherCloudy } from '@mdi/js';

const useStyles = createUseStyles({
  info: {
    gap: '0.5rem',
    width: 'fit-content',
    height: 'fit-content',
    margin: '0',
    display: 'flex',
    padding: '1rem',
    flexFlow: 'column nowrap',
    color: 'white',

    '& .info-desc': {
      fontSize: '2rem'
    },
    '& .info-city': {
      fontSize: '1.5rem'
    },
    '& .info-time': {
      fontSize: '2.5rem',
      fontWeight: '600',
    }
  },

})

const WeatherInfo = ({weather}) => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <div className="info-desc">{weather.weather[0]['main']}</div>
      <div className="info-city">{weather.name}</div>
      <div className="info-date">Thursday, 6th Oct '22</div>
      <div className="info-time">{weather.main['temp']} °C</div>
      <div className="info-unit">Display in C</div>
      <div className="info-icon">
        <Icon path={mdiWeatherCloudy}
          title="weather-cloudy"
          size={3}
          color="white" />
      </div>
    </div>
  );
};

export default WeatherInfo;