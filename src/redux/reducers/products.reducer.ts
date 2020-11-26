import { GET_PRODUCTS } from '../types/products.types';

const defaultState = {
    products: []
};

export default function (state = defaultState, { type, payload }: { type: any, payload: any }) {
    switch (type) {
        case GET_PRODUCTS:
            {
                return { ...state, products: payload };
            }
        default:
            return state;
    }
}