import React, {useState, createContext} from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState('Tester');
    const [age, setAge] = useState(100);
    function changeUserName(value){
        setUser(user=>value)
    }
    function changeAge(value){
        setAge(age=>value);
    }
    return(
        <div>
            <h1>
                ComponentA
            </h1>
            <h2>
                Hello {user}
            </h2>
            <button onClick={()=>changeUserName('CompAAAAA')}>
                Change name
            </button>
            <button onClick={()=>changeAge(50)}>
                Change age
            </button>
            <UserContext.Provider value={{age, user, changeUserName, changeAge}}>
                <ComponentB userName={user} userAge={age}></ComponentB>
            </UserContext.Provider>
            

        </div>
    )
}
export default ComponentA