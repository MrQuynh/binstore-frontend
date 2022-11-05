import * as request from '~/utils/httpRequest';

export const getAllProductsService = async () => {
    try {
        const res = await request.get('get-all-products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const createProduct = async () => {
    try {
        const res = await request.get('create-product');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
