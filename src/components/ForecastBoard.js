import React from "react";
import { createUseStyles } from "react-jss";
import ForecastItem from "./ForecastItem";

const useStyles = createUseStyles({
  forecast: {
    gap: '0.5rem',
    color: 'white',
    width: 'fit-content',
    height: 'fit-content',
    margin: '0',
    display: 'flex',
    padding: '1rem',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'

  },

})

const Forecast = () => {
  const classes = useStyles();
  return (
    <div className={classes.forecast}>
      <ForecastItem />
    </div>
  );
};

export default Forecast;