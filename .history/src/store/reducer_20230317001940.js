import {
    CHOOSE_BRAND_REDUX,
    COUNT_MESSAGE_REDUX,
    GET_ALL_PRODUCTS,
    GET_BRAND_REDUX,
    SET_MESSAGE_REDUX,
} from './constants';

const initState = {
    language: JSON.parse(localStorage.getItem('LANGUAGE')) || 'vi',
    // ___________
    allProducts: [],
    brandRedux: [],
    chooseBrandState: { isChecked: true, keyMap: 'B0', value: 'All' },
    setMessage: false,
    countMessageRedux: 0,
    activeUserRedux: 2,
};

function reducer(state, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            };
        case GET_BRAND_REDUX:
            const data = action.payload;
            let newData = {};
            if (data && data.length > 0) {
                data.map((item) => {
                    return (newData = { ...newData, [item.brain]: item.brainData.value });
                });
            }
            let complete = [];
            for (const key in newData) {
                complete.push({ keyMap: key, value: newData[key] });
            }

            return {
                ...state,
                brandRedux: complete,
            };
        case CHOOSE_BRAND_REDUX:
            return {
                ...state,
                chooseBrandState: action.payload,
            };
        case SET_MESSAGE_REDUX:
            return {
                ...state,
                setMessage: action.payload === true ? true : false,
            };
        case COUNT_MESSAGE_REDUX:
            let newCount = state.countMessageRedux;
            if (action.payload === 0) {
                newCount = 0;
            } else {
                newCount += 1;
            }
            return {
                ...state,
                countMessageRedux: newCount,
            };
        case SET_MESSAGE_REDUX:
            return {
                ...state,
                setMessage: action.payload === true ? true : false,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
