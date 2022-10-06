import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
   searchbar: {
    '& input': {
      margin: '0',
      width: '-webkit-fill-available',
      padding: '10px',
      color: 'black',
      border: 'none',
      borderRadius: '6px',
      backgroundColor: 'whitesmoke',
    }
   },

})

const Searchbar = () => {
   const classes = useStyles();
   return (
      <div className={classes.searchbar}>
        <input type='text' placeholder='search places' required></input>
      </div>
   );
};

export default Searchbar;