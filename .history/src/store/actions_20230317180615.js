import {
    ACTIVE_USER_REDUX,
    CHOOSE_BRAND_REDUX,
    COUNT_MESSAGE_REDUX,
    GET_ALL_PRODUCTS,
    GET_BRAND_REDUX,
    SET_LANGUAGE,
    SET_MESSAGE_REDUX,
} from './constants';

export const getAllProducts = (payload) => ({
    type: GET_ALL_PRODUCTS,
    payload,
});
export const getBrandRedux = (payload) => ({
    type: GET_BRAND_REDUX,
    payload,
});
export const chooseBrandRedux = (payload) => ({
    type: CHOOSE_BRAND_REDUX,
    payload,
});
export const setMessageRedux = (payload) => ({
    type: SET_MESSAGE_REDUX,
    payload,
});
export const countMessageRedux = (payload) => ({
    type: COUNT_MESSAGE_REDUX,
    payload,
});
export const activeUserRedux = (payload) => ({
    type: ACTIVE_USER_REDUX,
    payload,
});
export const setLanguage = (payload) => ({
    type: SET_LANGUAGE,
    payload,
});
