import React from 'react';
import style from './Button.module.css'
function Button(props) {
    const custom = {
        backgroundColor: 'pink',
        color:'white',
        margin: '150px'
    }
    function clickMe(){
        alert('Hello');
    }
    function userName(value){
        alert(`Hello ${value}`);
    }
    return (
        <>
            <button onClick={clickMe} className={style.btn}>
                Componetn Button
            </button>
            <button 
            onClick={()=>{userName('Tester')}} 
            style={custom}>
                Componetn Button
            </button>        
        </>

    );
}

export default Button;