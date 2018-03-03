import { 
    FETCH_DATA,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_ERROR
 } from './types';

 import API from '../api/index';

export function fetchData() {
    return {
        type: FETCH_DATA
    }
}

export function loadPhones(data) {
    return {
        type: FETCH_PHONES_SUCCESS,
        payload: data
    }
}

export function loadPhonesError(error) {
    return {
        type: FETCH_PHONES_ERROR,
        payload: error
    }
}

export function loadData () {
    return async (dispatch) => {
        dispatch(() => {
            return {
                type: FETCH_DATA
            }
        })

        try {
            const data = await API.phones.getAllPhones();
            setTimeout(() => {
                dispatch(loadPhones(data.phones))
            }, 1500)
        } catch (error) {
            dispatch(loadPhonesError(error));
        }
    }
}

