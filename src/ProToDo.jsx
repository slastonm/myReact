import React, {useState} from 'react';

function ProToDo(props) {
    const [products, setProducts] = useState([]);
    const [productYear, setProductYear] = useState(new Date().getFullYear());
    const [productBrand, setProductBrand] = useState('');
    const [productModel, setProductModel] = useState('');

    function addItem(){
        const newProduct={
            year:productYear,
            brand:productBrand,
            model:productModel
        }
        setProducts(products=>[...products, newProduct]);
        setProductBrand('');
        setProductModel('');
    }
    function yearChange(e){
        setProductYear(e.target.value);
    }
    function brandChange(e){
        setProductBrand(e.target.value);
    }
    function modelChange(e){
        setProductModel(e.target.value);
    }
    function removeItem(indexEl){
        setProducts(products=>products.filter((value, index)=>index !=indexEl))
    }

    return (
        <div>
            <h3>
                Product Data
            </h3>
            <div>
                <input onChange={yearChange} value={productYear} placeholder='Type year' type="text" />
            </div>
            <br />
            <div>
                <input onChange={brandChange} value={productBrand} placeholder='Type brand' type="text" />
            </div>
            <br />
            <div>
                <input onChange={modelChange} value={productModel} placeholder='Type model' type="text" />
            </div>
            <br />
            <button onClick={addItem}>
                Add product to list
            </button>
            <p>
                Product list
            </p>
            <ul>
                {
                    products.map((value, index)=><li key={index} onClick={()=>removeItem(index)}>This {value.brand} model {value.model} production {value.year}</li>)
                }
            </ul>
        </div>
    );
}

export default ProToDo;