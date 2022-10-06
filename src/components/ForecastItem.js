import React from "react";
import { createUseStyles } from "react-jss";
import Icon from '@mdi/react';
import { mdiWeatherCloudy } from '@mdi/js';

const useStyles = createUseStyles({
  forecastItem: {
    height: 'fit-content',
    width: 'fit-content',
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '0',
    gap: '0.5rem',

  },

})

const ForecastItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.detailItem}>
      <div className="day">Friday</div>
      <div className="temp">
        <div className="temp-high">25 °C</div>
        <div className="temp-low">23 °C</div>
      </div>
      <div className="forecast-icon">
      <Icon path={mdiWeatherCloudy}
          title="weather-cloudy"
          size={1}
          color="white" />
      </div>
    </div>
  );
};

export default ForecastItem;