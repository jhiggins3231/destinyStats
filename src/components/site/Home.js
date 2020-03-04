import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import APIURL from '../../helpers/environment';
// var memberId = JSON.parse(body).Response;

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));




const Home = () => {
  const [displayName, setDisplayName] =useState('');
  const [membershipId, setMembershipId] = useState('');
console.log(displayName)

const searchXboxUser = (e) => {
  e.preventDefault();
  fetch(`${APIURL}/Destiny2/SearchDestinyPlayer/1/${displayName}`, {
    method: 'GET', 
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': '4d53b3854d334c6fa32b7bf7f07a7896'
    }
  })
  .then (res => res.json())
  .then(json => console.log(json))
  const results = json()
  const membershipId = JSON.parse(json)
  .catch(err => console.log(err))
}

const viewXboxUser = (e, membershipId) => {
  e.preventDefault();
  fetch(`${APIURL}/Destiny2/1/Profile{destinyMembershipId}/`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': '4d53b3854d334c6fa32b7bf7f07a7896'
  },
})
.then (res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))
}


const classes = useStyles();

    return (
        <div className="main">
            <div className="mainDiv">
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Xbox</InputLabel>
        <Input value={ displayName } onChange={ (e) => setDisplayName(e.target.value)}
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon onClick={searchXboxUser} />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Playstation</InputLabel>
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
