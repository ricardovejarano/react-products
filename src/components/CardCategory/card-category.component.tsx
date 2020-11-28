import React, { useState } from 'react';
import DetailProduct from '../DetailProduct/detail-product.component';
import ModalProduct from '../ModalProduct/modal-product.component';

export interface ICategory {
    _id: string;
    idUser: string;
    name: string;
    description: string;
    products?: IProductResponse[];
}

export interface IProductResponse {
    _id: string;
    name: string;
    price: number;
    description: string;
    disStock: number;
    idCategory: string;
}

function CardCategory(props: any) {

    const category: ICategory = props.category;

    const product: IProductResponse = {
        _id: '',
        name: '',
        price: 0,
        description: '',
        disStock: 0,
        idCategory: category._id
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="container">
            <div className="card my-3 mx-3" >
                <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <p className="card-text">{category.description}</p>
                    <button onClick={toggle}>Create Product</button>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        category.products?.map((val: IProductResponse, index: any) => {
                            return (
                                <div key={index}>
                                    <DetailProduct dispatch={props.dispatch} product={val} />
                                </div>
                            );
                        })
                    }
                </ul>
                <ModalProduct 
                dispatch={props.dispatch} 
                product={product} 
                modal={modal} 
                toggle={toggle} 
                create={true}/>
            </div>
        </div>
    );
}

export default CardCategory;