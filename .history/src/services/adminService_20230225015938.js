import * as request from '~/utils/httpRequest';

export const getAllProductsService = async (page) => {
    try {
        const res = await request.get(`get-all-products?page=${page}`);
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
export const getAGroupService = async (type, brand) => {
    try {
        const res = await request.get(`get-a-group?type=${type}&brand=${brand}`);
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
        const res = await request.get('get-all-users');
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const deleteUserService = async (id) => {
    try {
        const res = await request.get(`delete-user?id=${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
// booking admin
export const getBookingAdmin = async (status) => {
    try {
        const res = await request.get(`get-booking-product?status=${status}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
// confirm booking
export const confirmBooking = async (id) => {
    try {
        const res = await request.post('confirm-booking', id);
        return res;
    } catch (error) {
        console.log(error);
    }
};
// message admin
export const getConversationService = async () => {
    try {
        const res = await request.get('get-conversations');
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getAConversationAdminService = async (id) => {
    try {
        const res = await request.get(`get-a-conversations-admin?conversationId=${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
