import { GET_ALL_PRODUCTS } from './constants';

const initState = {
    language: JSON.parse(localStorage.getItem('LANGUAGE')) || 'vi',
    // ___________
    allProducts: [],
};

function reducer(state, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            };

        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
