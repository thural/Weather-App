import React from "react";
import { createUseStyles } from "react-jss";
import DetailsItem from "./DetailsItem";

const useStyles = createUseStyles({
  details: {
    gap: '0.5rem',
    width: 'fit-content',
    height: 'fit-content',
    margin: '0',
    display: 'flex',
    padding: '1rem',
    flexFlow: 'row nowrap',
    color: 'white',

    '& .bottom-panel': {
      backgroundColor: 'antiquewhite'
    }
  },

})

const WeatherInfo = ({weather}) => {
  const classes = useStyles();
  return (
    <div className={classes.details}>
      <DetailsItem weather={weather}/>
    </div>
  );
};

export default WeatherInfo;