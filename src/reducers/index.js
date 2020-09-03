import counterReducer from './counter';
import loggedInReducer from './isLoggedIn';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedInReducer
});


export default allReducers;