import React from "react";

const Home = (props) => {
    return (
        <div class="content">
            <h1 class="title"> Welcome to THE CODEX </h1>
            <br></br>
            <p>Planning on attending a coding bootcamp? You have come to the right place. Everything you need to know in one place!</p>
            <br></br>
            <h2 class="title"> -Tech Gear- </h2>
            <br></br>
	        <ul>
		        <li>Recommended purchases before bootcamp starts</li>
                <li> Computer chair cushions, blue light glasses, laptops, laptop cooling pads, keyboards, usb hubs, monitors, monitor arms.</li>
	        </ul>
            <br></br>
	        <h2 class="title"> -Cheatsheets- </h2>
	            <ul>
		        <li>This section you will be referencing many times throughout your journey to becoming a coding pro</li>
                <li> Cheatsheets included deal with CSS, HTML, Javascript and more!</li>
	        </ul>
            <br></br>
            <h2 class="title"> -Code Games- </h2>
            <br></br>
            <ul>
                <li>Games to run through to practice different languages</li>
            </ul>
            <br></br>
            <h2 class="title"> -Videos- </h2>
            <br></br>
            <ul>
                <li>Links to youtube channels and videos that will be of great help in your preperation for bootcamp</li>
            </ul>
        </div>
    )
}

export default Home