import { GET_PRODUCTS } from '../types/products.types';
import { API_PRODUCTS_URL } from '../../utils/constants';
import axios from 'axios';

export const getProducts = (idUser: string) => async (dispatch: any) => {
    const response = await axios.get(API_PRODUCTS_URL + 'getProductsByUser?idUser=' + idUser);
    dispatch({
        type: GET_PRODUCTS,
        payload: response.data.result,
    });
};