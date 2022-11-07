import * as request from '~/utils/httpRequest';

export const registerService = async (data) => {
    try {
        const res = await request.post('sign-up-user', data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
