import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Gear from "./Gear.js";
import Home from "./Home.js";
import Interview from "./Interview"
import Cheatsheet from "./Cheatsheet"
import Video from "./Video.js";
import Codegame from "./Codegame.js"
import Form from "./techForm.js"


function App() {
  // backend URL
  const url = "https://codex-project-backend.herokuapp.com"

  // State to Hold Gear
  const [gear, setGear] = React.useState([])
  const [interview, setInterview] = React.useState([])
  const [video, setVideo] = React.useState([])
  const [game, setGame] = React.useState([])
  const [cheatsheet, setCheatsheet] = React.useState([])


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
  const getInterview = () => {
    fetch(url + "/interviewprep/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setInterview(data);
      })
  }

  const getVideo = () => {
    fetch(url + "/video/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setVideo(data);
      })
  }
  const getGame = () => {
    fetch(url + "/codegames/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setGame(data);
      })
  }

  const getCheatsheet = () => {
    fetch(url + "/cheatsheet/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCheatsheet(data);
      })
  }


  // UseEffect to do initial fetch of gear
  React.useEffect(() => getGear(), []);
  React.useEffect(() => getInterview(), []);
  React.useEffect(() => getVideo(), []);
  React.useEffect(() => getGame(), []);
  React.useEffect(() => getCheatsheet(), []);


  // // handleCreate to create new gear
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
            <a className="tech">Tech Gear</a>
          </Link>

          <Link to="/codegames">
            <a className="games">Code Games</a>
          </Link>
          <Link to="/video">
            <a className="videos">Videos</a>
          </Link>

          <Link to="/cheatsheets">
            <a className="cheatsheet">Cheatsheets</a>
          </Link>
          <Link to="/interviewprep">
            <a className="intPrep">Interview Prep</a>
          </Link>
          <Link to="/techForm">
            <a style={{display:"none"}}>techForm</a>
          </Link>
          <span class="line"></span>
	      </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Home/>} />
          <Route exact path="/gear" render={(rp) => <Gear {...rp} gear= {gear} emptyGear= {emptyGear} handleCreate = {handleCreate} selectGear={selectGear} deleteGear= {deleteGear}/>} />
          <Route exact path="/interviewprep" render={(rp) => <Interview {...rp} interview={interview}/>} />
          <Route exact path="/video" render={(rp) => <Video {...rp} video= {video}/>}/>          
          <Route exact path="/codegames" render={(rp) => <Codegame {...rp} game= {game}/>}/>          
          <Route exact path="/cheatsheets" render={(rp) => <Cheatsheet {...rp} cheatsheet={cheatsheet}></Cheatsheet>}/>
          <Route exact path="/techForm" render={(rp) => <Form {...rp} label="create" gear={emptyGear} handleSubmit={handleCreate} />}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
