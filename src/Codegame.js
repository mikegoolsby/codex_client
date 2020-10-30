import React from "react"


const Codegame = (props) => {

    const {game} = props
    
    const loadGame = () => (
        
        <div>
            {game.map((game) => (
                <div className="content shrink">
                    <h1 className="map-head">{game.name}</h1>
                    <p className="map-head">What does it do?</p><p className="padding">{game.description}</p>
                    <p className="map-head">Check it out <a href={game.url} target="_blank" className="link-styled">here</a></p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return game.length > 0 ? loadGame() : loading  
}

export default Codegame