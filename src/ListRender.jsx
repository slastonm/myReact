import React from 'react';
import PropTypes from 'prop-types';

ListRender.propTypes = {
    products:PropTypes.array
};

function ListRender(props) {
    // const values = [
    //     {name:'Orange',price:75}, 
    //     {name:'Banan',price:55}, 
    //     {name:'Kiwi',price:65}, 
    //     {name:'Salad',price:100}
    // ];
    // values.sort((a,b)=>b.price -a.price);
    // const listEl = values.map((item, index)=>{
    //     return <li key={index}>Product: {item.name} price: {item.price}</li>
    const listEl = props.products.map((item, index)=>{
        return <li key={index}>Product: {item.name} price: {item.price}</li>
    })
    return (
        <ul>
            {listEl}
        </ul>
    );
}

export default ListRender;