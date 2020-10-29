import React from "react"

const Cheatsheet = (props) => {
  
    const {cheatsheet} = props

    const loadCheatsheet = () => (
        <div>
        {cheatsheet.map((cheatsheet) => (
            <div  className="content shrink">
                <h1>{cheatsheet.name}</h1>
                <br></br>
                <a href={cheatsheet.url} target="_blank"><img src={cheatsheet.img}></img></a>
            </div>
        ))}
    </div>
    )
    const loading = <h1>Loading...</h1>
    return cheatsheet.length > 0 ? loadCheatsheet() : loading  
}

export default Cheatsheet