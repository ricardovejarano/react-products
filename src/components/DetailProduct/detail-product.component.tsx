import React from 'react';

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

    return (
        <div className="container pt-5 mb-3 border-top">
            <h5><strong>Name:</strong>  {product.name}</h5>
            <h5><strong>Description:</strong>  {product.description}</h5>
            <h5><strong>Price:</strong>  {product.price}</h5>
            <h5><strong>Stock:</strong>  {product.disStock}</h5>
        </div>
    );
}

export default DetailProduct;