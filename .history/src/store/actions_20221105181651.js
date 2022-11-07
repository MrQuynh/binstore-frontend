import { GET_ALL_PRODUCTS } from './constants';

export const getAllProducts = (payload) => ({
    type: GET_ALL_PRODUCTS,
    payload,
});
