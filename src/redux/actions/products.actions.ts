import { GET_PRODUCTS } from '../types/products.types';
import { API_PRODUCTS_URL } from '../../utils/constants';
import axios from 'axios';
import { ICategory } from '../../components/CardCategory/card-category.component';
import { IconType } from 'antd/lib/notification';

export const getProducts = (idUser: string) => async (dispatch: any) => {
    const response = await axios.get(API_PRODUCTS_URL + 'getProductsByUser?idUser=' + idUser);
    const categories: ICategory[] = response.data.result;
    categories.sort((a: ICategory, b: ICategory) => {
        return a.products?.length === 0 ? 1 : -1;
    });
    dispatch({
        type: GET_PRODUCTS,
        payload: categories,
    });
};

export const deleteProduct = (idProduct: string, idUser: string) => async (dispatch: any) => {
    console.log('llega');
    const response1 = await axios.post(API_PRODUCTS_URL + 'deleteProduct', {
        idProduct
    });
    if (response1.data.status === 200) {
        const response = await axios.get(API_PRODUCTS_URL + 'getProductsByUser?idUser=' + idUser);
        const categories: ICategory[] = response.data.result;
        categories.sort((a: ICategory, b: ICategory) => {
            return a.products?.length === 0 ? 1 : -1;
        });

        dispatch({
            type: GET_PRODUCTS,
            payload: categories,
        });
    }
}