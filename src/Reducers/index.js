import { combineReducers } from 'redux';
import DigiReducers from './AuthReducers';

export default combineReducers({
    DigiResponse : DigiReducers
})