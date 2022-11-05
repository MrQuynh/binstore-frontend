import * as request from '~/utils/httpRequest';

export const getAllProductsService = async () => {
    try {
        const res = await request.get('get-all-products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const createProductService = async () => {
    try {
        const res = await request.post('create-product');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
