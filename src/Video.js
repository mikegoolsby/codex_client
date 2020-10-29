import React from "react"


const Video = (props) => {

    const {video} = props
    
    const loadVideo = () => (
        
        <div>
            {video.map((video) => (
                <div className="content shrink">
                    <h1>{video.name}</h1>
                    <p>{video.description}</p>
                    <a href={video.url}>{video.url}</a>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return video.length > 0 ? loadVideo() : loading  
}

export default Video