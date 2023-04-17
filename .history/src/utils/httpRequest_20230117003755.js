import axios from 'axios';

// const linkApi = 'https://binstroe-backend.onrender.com/';
const linkApi = 'http://localhost:8000//';
let token = localStorage.getItem('TOKEN');
if (token) {
    token = token?.slice(1, token.length - 1);
}

const request = axios.create({
    baseURL: linkApi,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        // // type: 'formData',
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};
export const patch = async (path, options = {}) => {
    const response = await request.patch(path, options);
    return response.data;
};
export const put = async (path, options = {}) => {
    const response = await request.put(path, options);
    return response.data;
};
export const DELETE = async (path, options = {}) => {
    const response = await request.delete(path, options);
    return response.data;
};

export default request;
