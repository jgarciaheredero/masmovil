import { 
    FETCH_DATA,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_ERROR
 } from '../actions/types';

 const initialState = {
    phones: [],
    loading: true,
    error: false
 }

export default function phoneListContainerReducer (state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case FETCH_DATA: 
            return {
                ...state
            }
        case FETCH_PHONES_SUCCESS: 
            return {
                ...state,
                phones: [...payload],
                loading: false,
            }
        case FETCH_PHONES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        default: {
            return state
        }
    }
}