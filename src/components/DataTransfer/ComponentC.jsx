import React, {useContext} from "react"
import { UserContext } from "./ComponentA"
function ComponentC(props){
    // const age = useContext(UserContext)
    const {age, user, changeUserName, changeAge} = useContext(UserContext);
    return(
        <div>
            <h1>
                ComponentC {user}
            </h1>

            <h4>
                User age {age}
            </h4>
            <button onClick={()=>changeUserName('ComponentCCCCCC')}>
                Change root Name
            </button>
            <button onClick={()=>changeAge('1000000000000000')}>
                Change age
            </button>
        </div>
    )
}
export default ComponentC