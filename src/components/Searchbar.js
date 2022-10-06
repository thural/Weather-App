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

const Searchbar = ({handleSearch}) => {
   const classes = useStyles();
   return (
      <form className={classes.searchbar} onSubmit={(e) => handleSearch(e)}>
        <input type='input' name='search' placeholder='search places' required></input>
      </form>
   );
};

export default Searchbar;