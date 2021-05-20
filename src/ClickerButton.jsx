import React from "react"

const ClickerButton = ({onClick}) =>{
    return(<button onClick={()=>onClick()}className="mainButton">
        Click Me!
    </button>)
}


export default ClickerButton