import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';


const ItemList = ({ formData, setFormData }) => {
    const { products } = formData;

    const addHandler = () => {
        setFormData({ ...formData, products: [...products, { name: '', price: '', qty: '' }] });
        console.log(products)
    }


    const changeHandler = (e, index) => {
        const { name, value } = e.target
        const newProducts = [...products]
        newProducts[index][name] = value;

        setFormData({ ...formData, products: newProducts })
    }

    const deleteHandler = (i) => {
        const newProducts = products.filter((item, index) => index !== i);
        setFormData({ ...formData, products: newProducts })
    }



    return (
        <div className='item-list'>
            <p>Purchased Products</p>
            {products.map((product, i) => (
                <ProductItem
                    key={i}
                    product={product}
                    changeHandler={changeHandler}
                    deleteHandler={deleteHandler} />
            ))}
            <button onClick={addHandler}>Add Item</button>
        </div>

    )
}

export default ItemList




function ProductItem({ product, changeHandler, deleteHandler }) {
    return (
        <div className="form-input__list">
            <FormInput name='name' label='Name' type='text' value={product.name}
                onChange={(e) => changeHandler(e, i)} />

            <div>
                <FormInput name='price' label='Price' type='text' value={product.price}
                    onChange={(e) => changeHandler(e, i)} />
                <FormInput name='qty' label='Qty' type='number' value={product.qty}
                    onChange={(e) => changeHandler(e, i)} />
            </div>
            <button onClick={(e) => deleteHandler(i)}>Remove</button>
        </div>
    )
}