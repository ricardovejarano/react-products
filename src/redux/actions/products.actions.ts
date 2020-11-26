import { GET_PRODUCTS } from '../types/products.types';
import { API_PRODUCTS_URL } from '../../utils/constants';
import axios from 'axios';

export const getProducts = (idCategory: string) => async (dispatch: any) => {
    const response = await axios.get(API_PRODUCTS_URL + 'getProducts?idcategory=' + idCategory);
    console.log('response in products actions', response.data);
    dispatch({
        type: GET_PRODUCTS,
        payload: response.data.result,
    });
};