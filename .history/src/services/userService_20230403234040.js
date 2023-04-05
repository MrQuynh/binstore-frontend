import * as request from '../../utils/httpRequest';

export const registerService = async (data) => {
    try {
        const res = await request.post('sign-up-user', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const loginService = async (data) => {
    try {
        const res = await request.post('login-user', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const loginGoogleService = async (data) => {
    try {
        const res = await request.post('auth/login/google', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const bookingService = async (data) => {
    try {
        const res = await request.post('booking-product', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateUserService = async (data) => {
    try {
        const res = await request.post('update-user', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
// message
export const getAConversationService = async () => {
    try {
        const res = await request.get('get-a-conversation');
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const createAMessageService = async (data) => {
    try {
        const res = await request.post('create-a-message', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
