import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import phoneListContainerReducer from './phoneListContainerReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    phoneListContainerReducer
})

export default rootReducer