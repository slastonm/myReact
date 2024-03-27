import React, {useState, useEffect} from 'react';

function UseEffectComp(props) {
    let [count, setCount] = useState(0);
    // useEffect(()=>{
    //     document.title = `Count: ${count}`;
    // })
    // useEffect(()=>{
    //     document.title = `Count: ${count}`;
    // }, []);
    useEffect(()=>{
        document.title = `Count: ${count}`;
    },[count])
    function addValue(){
        setCount(count=>count+1);
    }
    return (
        <div>
            Count {count}
            <button onClick={addValue}>
                +1
            </button>
        </div>
    );
}

export default UseEffectComp;