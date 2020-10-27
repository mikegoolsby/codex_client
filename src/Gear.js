import React from "react";

const Gear = (props) => {

  const {gear} = props

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
          <button
            onClick={() => {
              props.selectGear(gear);
              props.history.push("/edit");
            }}
          >Edit</button>
          <button
            onClick={() => {
              props.deleteGear(gear);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ) 
  const loading = <h1>Loading...</h1>
  return gear.length > 0 ? loaded() : loading
};

export default Gear;