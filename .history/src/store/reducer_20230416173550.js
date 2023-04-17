import {
    ACTIVE_USER_REDUX,
    CHOOSE_BRAND_REDUX,
    COUNT_MESSAGE_REDUX,
    GET_ALL_PRODUCTS,
    GET_BRAND_REDUX,
    PRODUCT_VIEWED_REDUX,
    SET_LANGUAGE,
    SET_MESSAGE_REDUX,
    SET_NEWS,
} from './constants';

const initState = {
    language: JSON.parse(localStorage.getItem('LANGUAGE')) || 'en',
    allProducts: [],
    brandRedux: [],
    chooseBrandState: { isChecked: true, keyMap: 'B0', value: 'All' },
    setMessage: false,
    countMessageRedux: 0,
    activeUserRedux: 2,
    setNewsRedux: 0,
    productViewedRedux: [],
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
            if (data && data?.length > 0) {
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
        case ACTIVE_USER_REDUX:
            return {
                ...state,
                activeUserRedux: action.payload,
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        case SET_NEWS:
            return {
                ...state,
                setNewsRedux: action.payload,
            };
        case PRODUCT_VIEWED_REDUX:
            let newArray = state.productViewedRedux;
            if (newArray?.length >= 5) {
                newArray.shift();
            }
            if (newArray.find((item) => item.id == action.payload?.id)) {
                newArray = [action.payload, ...newArray];
            }
            let check = false;
            for (var i = 0; i < newArray.length; i++) {
                if (newArray[i].id == action.payload.id) {
                    check = true;
                    // newArray.push(action.payload);
                    break;
                }
            }
            if (!check) {
                newArray = [action.payload, ...newArray];
            }
            return {
                ...state,
                productViewedRedux: newArray,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
