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

    '& .bottom-panel': {
      backgroundColor: 'antiquewhite'
    }
  },

})

const WeatherInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <div className="info-desc">Few Clouds</div>
      <div className="info-city">Baku</div>
      <div className="info-date">Thursday, 6th Oct '22</div>
      <div className="info-time">23 °C</div>
      <div className="info-unit">Dsiplay in C</div>
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