import React from "react";
import { createUseStyles } from "react-jss";
import Icon from '@mdi/react'
import { mdiWeatherPartlyCloudy } from '@mdi/js';

const useStyles = createUseStyles({
  appheader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '1rem',
    '& h1': {
      color: 'white'
    }
  },

})

const AppHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.appheader}>
      <div className="logo">
        <Icon path={mdiWeatherPartlyCloudy}
          title="weather-partlycloudy"
          size={3}
          color="white" />
      </div>
      <h1>Weather App</h1>
    </div>
  );
};

export default AppHeader;