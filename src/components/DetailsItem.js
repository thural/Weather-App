import React from "react";
import { createUseStyles } from "react-jss";
import Icon from '@mdi/react';
import { mdiWeatherCloudy } from '@mdi/js';

const useStyles = createUseStyles({
  detailItem: {
    height: 'fit-content',
    width: 'fit-content',
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '0',
    gap: '0.5rem',

  },

})

const DetailsItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.detailItem}>
      <div className="detail-icon">
      <Icon path={mdiWeatherCloudy}
          title="weather-cloudy"
          size={1}
          color="white" />
      </div>
      <div className="detail-info">
        <div className="detail-label">Feels Like</div>
        <div className="detail-value">23 °C</div>
      </div>
    </div>
  );
};

export default DetailsItem;