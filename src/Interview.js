import React from "react"


const Interview = (props) => {

    const {interview} = props
    
    const loadInterviews = () => (
        
        <div>
            {interview.map((interview) => (
                <div  className="content shrink">
                    <a href={interview.url} target="_blank"><img src={interview.img} className="padding"></img></a>
                    <h1 className="map-head">{interview.name}</h1>
                    <br></br>
                    <h2 className="hvr-wobble-to-bottom-right pricing">What does it cost? ${interview.price}</h2>
                    <br></br>
                    <p className="map-head">What is it?</p><p className="padding">{interview.description}</p>
                    <p><p className="map-head">What languages can I practice?</p>{interview.language}</p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return interview.length > 0 ? loadInterviews() : loading  
}

export default Interview
