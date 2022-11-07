import * as request from '~/utils/httpRequest';

export const getAllProductsService = async () => {
    try {
        const res = await request.get('get-all-products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAProductService = async (id) => {
    try {
        const res = await request.get(`get-a-product?id=${id}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
export const createProductService = async (data) => {
    try {
        const res = await request.post('create-product', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAGroupService = async (type) => {
    try {
        const res = await request.post('get-a-group', type);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// get-a-group
