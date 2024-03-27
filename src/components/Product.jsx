import React from 'react';
import PropTypes from 'prop-types';
// frsp
Product.propTypes = {
    name:PropTypes.string,
    price:PropTypes.number
};
Product.defaultProps = {
    name:'No Info',
    price:0
}

function Product(props) {
    return (
        <div>
            <h3>
                Product name: {props.name}
            </h3>
            <h4>
                Price {props.price} $
            </h4>
            <h4>
                Discount {props.price>300?'Yes':'No'}
            </h4>
        </div>
    );
}

export default Product;