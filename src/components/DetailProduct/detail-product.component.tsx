import React from 'react';
import { deleteProduct } from '../../redux/actions/products.actions';

export interface IProductResponse {
    _id: string;
    name: string;
    price: number;
    description: string;
    disStock: number;
    idCategory: string;
}

function DetailProduct(props: any) {

    const product: IProductResponse = props.product;

    const requestDelete = (idProduct: string) => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '');
        console.log(idProduct, userInfo._id);
        props.dispatch(deleteProduct(idProduct, userInfo._id));
    }

    return (
        <div className="container pt-5 mb-3 border-top">
            <h5><strong>Name:</strong>  {product.name}</h5>
            <h5><strong>Description:</strong>  {product.description}</h5>
            <h5><strong>Price:</strong>  {product.price}</h5>
            <h5><strong>Stock:</strong>  {product.disStock}</h5>
            <button>Edit</button>
            <button onClick={() => requestDelete(product._id)} >Delete</button>
        </div>
    );
}

export default DetailProduct;