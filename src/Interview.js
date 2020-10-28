import React from "react"
import Grid from '@material-ui/core/Grid';

const Interview = (props) => {

    const {interviews} = props
    
    const loadInterviews = () => {
        <div className="content">
            {interviews.map((interview) => {
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <h3>{interview.name}</h3>
            </Grid>
            })}
        </div>
          const loading = <h1>Loading...</h1>
    return interviews.length > 0 ? loadInterviews() : loading  
    }

}


export default Interview