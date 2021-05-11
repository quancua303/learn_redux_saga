import { types } from './../action/types';

const INITIAL_STATE = {
    loading: false,
    products: [],
    error: null
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOAD_POST_START:
            return {
                ...state,
                loading: true,
            };

        case types.LOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case types.LOAD_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.ADD_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_POST_SUCCESS:
            const newList = [...state.products];
            return {
                ...state,
                products: newList.push(action.payload),
                loading: false,
            };

        case types.ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
            
            
        
        default:
            return state;
    }
};

export default productReducer;

