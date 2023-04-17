import * as request from '~/utils/httpRequest';
export const getAllCode = async (code) => {
    try {
        const res = await request.get(`get-all-code?code=${code}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getAllComments = async (id, CurrentPage) => {
    const page = CurrentPage || 1;
    try {
        const res = await request.get(`get-all-comments?productId=${id}&page=${page}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const createAComments = async (data) => {
    try {
        const res = await request.post(`create-a-comment`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const deleteAComment = async (commentId) => {
    try {
        const res = await request.post(`delete-a-comment?commentId=${commentId}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const bookingStatus = async (status) => {
    try {
        const res = await request.get(`booking-status?status=${status}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const cancelService = async (id) => {
    try {
        const res = await request.post('cancel-product', id);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const createBrandService = async (data) => {
    try {
        const res = await request.post('create-new-brand-product', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
