import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const Gear = (props) => {
  
  const {gear} = props

  const classes = useStyles();
  
  const loaded = () => (
    <div>
      {gear.map((gear) => (
        <div class="infocardContainer">
          <div id="main">
            <img src={gear.img}></img>
          </div>
          <div id="textbois">
            <h2>{gear.name}</h2>
            <h4>Price: {gear.price}</h4>
            <p>{gear.description}</p>
            <h3>Review</h3><p>{gear.review}</p>
            
          </div>
        </div>  
      ))}
    </div>
  ) 
  console.log(gear)
  const loading = <h1>Loading...</h1>
  return gear.length > 0 ? loaded() : loading
};

export default Gear;