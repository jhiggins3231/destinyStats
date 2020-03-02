import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


const Home = () => {

const classes = useStyles();

    return (
        <div className="main">
            <div className="mainDiv">
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
