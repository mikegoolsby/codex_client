import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const Interview = (props) => {

    const {interview} = props
    
    const loadInterviews = () => (
        
        <div className="content">
            {interview.map((interview) => {
            <div>
                <h1>{interview.name}</h1>
                <h3>Price: ›{interview.price}</h3>
                <p>{interview.description}</p>
            </div>
            })}
        </div>
    )
    const loading = <h1>Loading...</h1>
return interview.length > 0 ? loadInterviews() : loading  
}


export default Interview