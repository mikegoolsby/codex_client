import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Route, Link, Switch } from "react-router-dom";
import Form from "./techForm.js"

// import React, { Component } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const Gear = (props) => {

  const [newGear, setNewGear] = React.useState([])

  const url = "https://codex-project-backend.herokuapp.com"

  // Empty Gear
  const emptyGear = {
    name: "",
    price: 0,
    description: "",
    review: "",
    url: "",
    img: ""
  }

  const getGear = () => {
    fetch(url + "/gear/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNewGear(data);
      })
  }

  // handleCreate to create new gear
  const handleCreate = (newGear) => {
    fetch(url + "/gear/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGear),
    }).then(response => {
      getGear();
    })
  }
  
  const {gear} = props

  const classes = useStyles();

  // const handleClick = () => {


  // }
  
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
              <a href="http://google.com">Buy</a>
              {/* <a href="google.com"><button className="btn-gear"> <i class="fa fa-shopping-bag"></i>Buy Now</button></a> */}
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
  return (
    <div className="container">
      <Link to="/techForm">
            <button style={{marginTop:"300px"}}>techForm</button>
      </Link>
      
      {/* <Route exact path="/cheatsheets" render={(rp) => <Cheatsheet/>}/> */}
      <Route exact path="/techForm" render={(rp) => <Form {...rp} label="create" gear={emptyGear} handleSubmit={handleCreate} />}/>
{/* {...rp} label="create" emptyGear={props.emptyGear} handleSubmit={handleCreate} */}
      
      {gear.length > 0 ? loaded() : loading}
    </div>
    )
};

export default Gear;