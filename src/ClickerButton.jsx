import React, {useContext} from "react"
import ClickerContext from "./clickerContext";

const ClickerButton = ({onClick}) =>{
  const { handleIncreaseClicks  } = useContext(ClickerContext)
    return(<button onClick={()=>handleIncreaseClicks()}className="mainButton">
        Click Me!
    </button>)
}


export default ClickerButton