import React from "react"


const Interview = (props) => {

    const {interview} = props
    
    const loadInterviews = () => (
        
        <div>
            {interview.map((interview) => (
                <div  className="content shrink">
                    <a href={interview.url} target="_blank"><img src={interview.img}></img></a>
                    <h1>{interview.name}</h1>
                    <br></br>
                    <h3>Price: ${interview.price}</h3>
                    <br></br>
                    <p>What it is: {interview.description}</p>
                    <h5>What languages I can practice: {interview.language}</h5>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return interview.length > 0 ? loadInterviews() : loading  
}

export default Interview
