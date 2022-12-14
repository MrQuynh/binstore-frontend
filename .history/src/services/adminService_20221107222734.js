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
        const res = await request.get(`get-a-group?type=${type}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const deleteAProductService = async (id) => {
    try {
        const res = await request.post(`delete-product?id=${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateProductService = async (data) => {
    try {
        const res = await request.put(`update-product`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// user service
export const getAllUsersService = async () => {
    try {
        const res = await request.get(`set-all-users`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
