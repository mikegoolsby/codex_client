import React from "react"


const Codegame = (props) => {

    const {game} = props
    
    const loadGame = () => (
        
        <div>
            {game.map((game) => (
                <div className="content">
                    <h1>{game.name}</h1>
                    <p>{game.description}</p>
                    <a href={game.url}>{game.url}</a>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return game.length > 0 ? loadGame() : loading  
}

export default Codegame