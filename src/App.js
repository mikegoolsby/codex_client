import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Gear from "./Gear.js";
import Home from "./Home.js";
import Video from "./Video.js";
import Cheatsheet from "./Cheatsheet.js"

function App() {
  // backend URL
  const url = "https://codex-project-backend.herokuapp.com"

  // State to Hold Gear
  const [gear, setGear] = React.useState([])

  // Empty Gear
  const emptyGear = {
    name: "",
    price: 0,
    description: "",
    review: "",
    url: "",
    img: ""
  }

  // selectGear, this will act as the piece of tech gear to be edited
  const [selectedGear, setSelectedGear] = React.useState(emptyGear)
  // fetching from the gear API
  const getGear = () => {
    fetch(url + "/gear/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setGear(data);
      })
  }
  // UseEffect to do initial fetch of gear
  React.useEffect(() => getGear(), []);

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

  // handleUpdate for edit
  const handleUpdate = (gear) => {
    fetch(url + '/gear/' + gear._id, {
      method: "put",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(gear)
    })
    .then(response => getGear());
  }

  const selectGear = (gear) => {
    setSelectedGear(gear);
  }
  // Delete function to remove gear
  const deleteGear = (gear) => {
    fetch(url + '/gear/' + gear._id, {
      method: "delete"
    }).then((response) => getGear());
  }

  return (
    <div className="App">
      <header id="header">
	      <nav class="links">
          <Link to="/">
          <a>Home</a>
          </Link>
          <Link to="/gear">
            <a>Tech Gear</a>
          </Link>
          <a href="#">Cheatsheets</a>
          <a href="#">Code Games</a>
          <a href="#">Videos</a>
          <a href="#">Interview</a>
          <span class="line"></span>
	      </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Home/>} />
          <Route exact path="/gear" render={(rp) => <Gear {...rp} gear= {gear} selectGear={selectGear} deleteGear= {deleteGear}/>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
