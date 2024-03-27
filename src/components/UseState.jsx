import React, {useState} from 'react';

function UseState() {
    let [count, setCount] = useState(0);
    let [inputValue, setInput] = useState('');
    function upValue(){
        setCount(count=>count+1);

        // setCount(count+1);
        // setCount(count+1);
    }
    function inputChange(e){
        setInput(e.target.value);
    }
    return (
        <div>
            {count}
            <button onClick={upValue}>
                +1
            </button>
            <hr />
            <input 
            value={inputValue} 
            onChange={inputChange}
            type="text" />
            <p>
                InputValue : {inputValue}
            </p>
        </div>
    );
}

export default UseState;