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
        <div className="content">
          <img src={gear.img}/>
          <h1>{gear.name}</h1>
          <h3>Price: ›{gear.price}</h3>
          <p>{gear.description}</p>
          <h3>Review</h3><p>{gear.review}</p> 
          <h3><a href= {gear.url}>Buy</a></h3>
          <div className={classes.root}>
            <Button variant="contained"
              onClick={() => {
                props.selectGear(gear);
                props.history.push("/edit");
              }}
            >EDIT</Button>
            <Button variant="contained" color="secondary"
              onClick={() => {
                props.deleteGear(gear);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  ) 
  const loading = <h1>Loading...</h1>
  return gear.length > 0 ? loaded() : loading
};

export default Gear;