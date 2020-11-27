import React from 'react';
import DetailProduct from '../DetailProduct/detail-product.component';

interface ICategory {
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

    console.log(props.category);
    const category: ICategory = props.category;


    return (
        <div className="container">
            <div className="card my-3 mx-3" >
                <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <p className="card-text">{category.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        category.products?.map((val: IProductResponse, index: any) => {
                            return (
                                <div key={index}>
                                    <DetailProduct product={val}/>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default CardCategory;