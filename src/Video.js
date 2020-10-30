import React from "react"


const Video = (props) => {

    const {video} = props
    
    const loadVideo = () => (
        
        <div>
            {video.map((video) => (
                <div className="content shrink">
                    <h1 className="map-head">{video.name}</h1>
                    <p className="map-head">What will I learn?</p><p className="padding">{video.description}</p>
                    <p className="map-head">Check it out <a href={video.url} target="_blank" className="link-styled">here</a></p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return video.length > 0 ? loadVideo() : loading  
}

export default Video