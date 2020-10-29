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
        <div className="card">
          <div className="left">
            <img className="img-gear" src={gear.img}></img>
          </div>
          <div className="right">
            <div className="product-info">
              <h1 className="h1-gear">{gear.name}</h1>
            </div>
            <div className="details">
              <h3 className="price-gear">Price - ${gear.price}</h3>
              <p className="p-gear">{gear.description}</p>
              <hr className="style"></hr>
              <h3 className="review-gear">Review</h3>
              <p className="p-gear">{gear.review}</p>
              <button className="btn-gear"> <i class="fa fa-shopping-bag"></i>Buy Now</button>
            </div> 
          </div>
        </div>  
//         <div className="content">
//           <img src={gear.img}/>
//           <h1>{gear.name}</h1>
//           <h3>Price: ›{gear.price}</h3>
//           <p>{gear.description}</p>
//           <h3>Review</h3><p>{gear.review}</p> 
//           <h3><a href= {gear.url}>Buy</a></h3>
//           <div className={classes.root}>
//             <Button variant="contained"
//               onClick={() => {
//                 props.selectGear(gear);
//                 props.history.push("/edit");
//               }}
//             >EDIT</Button>
//             <Button variant="contained" color="secondary"
//               onClick={() => {
//                 props.deleteGear(gear);
//               }}
//             >
//               Delete
//             </Button>
//           </div>
//         </div>
      ))}
    </div>
  ) 
  console.log(gear)
  const loading = <h1>Loading...</h1>
  return gear.length > 0 ? loaded() : loading
};

export default Gear;