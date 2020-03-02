import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import APIURL from '../../helpers/environment';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));




const Home = () => {
  const [displayName, setDisplayName] =useState('');

const searchXboxUser = () => {
  fetch(`${APIURL}//Destiny2/SearchDestinyPlayer/1/${setDisplayName}/`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then (res => res.json())
  .catch(err => console.log(err))
}

const classes = useStyles();

    return (
        <div className="main">
            <div className="mainDiv">
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Playstation</InputLabel>
        <Input value={displayName} onChange={ (e) => setDisplayName(e.target.value)}
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon onClick={searchXboxUser} />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Xbox</InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Steam</InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        </div>
        </div>
    );
};

export default Home;
