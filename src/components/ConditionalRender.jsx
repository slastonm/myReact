import React from 'react';
import PropTypes from 'prop-types';

ConditionalRender.propTypes ={
    username:PropTypes.string,
    isLogin:PropTypes.bool
}
ConditionalRender.defaultProps ={
    username:'Test',
    isLogin:false
}
function ConditionalRender(props) {
    // if(props.isLogin){
    //     return (
    //         <div>
    //             <h2>
    //                 Hello {props.username}
    //             </h2>
    //         </div>
    //     );        
    // }
    // else{
    //     return (
    //         <div>
    //             <h2>
    //                 Login to system
    //             </h2>
    //         </div>
    //     );  
    // }


    const loginTemplate = <div><h2>Hello {props.username}</h2></div>;
    const noLoginTemplate = <div><h2>Login to system</h2></div>

    return(props.isLogin ? loginTemplate : noLoginTemplate);

}

export default ConditionalRender;