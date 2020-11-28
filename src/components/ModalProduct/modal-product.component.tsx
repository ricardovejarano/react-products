import React, { useState } from 'react';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { IProductResponse } from '../DetailProduct/detail-product.component';

function ModalProduct(props: any) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const product: IProductResponse = props.product;

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const updateProduct = (value: string | number, code: string) => {
        console.log(value);
        switch (code) {
            case 'name':
                product.name = value as string;
                break;
            case 'price':
                product.price = value as number;
                break;
            case 'description':
                product.description = value as string;
                break;
            case 'stock':
                product.disStock = value as number;
                break;
            default:
                break;
        }
    }

    const requestEdit = (product: IProductResponse) => {
        console.log(product);
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'name')} type="email" className="form-control" id="nameInput" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceInput">Price</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'price')} type="number" className="form-control" id="passwordIpriceInputnput" placeholder="Enter price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'description')} type="email" className="form-control" id="descriptionInput" placeholder="Enter description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stockInput">Stock</label>
                        <input onChange={(event) => updateProduct(event.target.value, 'stock')} type="password" className="form-control" id="stockInput" placeholder="Enter stock" />
                    </div>
                    <button type="button" onClick={() => requestEdit(product)} className="btn btn-primary mr-1">Edit</button>
                    <button type="button" onClick={props.toggle} className="btn btn-primary ml-1">Cancel</button>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalProduct;