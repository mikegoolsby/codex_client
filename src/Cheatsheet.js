import React from "react"

const Cheatsheet = (props) => {
  
    const {cheatsheet} = props

    const loadCheatsheet = () => (
        <div>
        {cheatsheet.map((cheatsheet) => (
            <div  className="content">
                <h1>{cheatsheet.name}</h1>
                <h3><a href= {cheatsheet.url}>Visit</a></h3>
            </div>
        ))}
    </div>
    )
    const loading = <h1>Loading...</h1>
    return cheatsheet.length > 0 ? loadCheatsheet() : loading  
}

export default Cheatsheet