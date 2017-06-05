import { combineReducers } from 'redux';
import edit from './edit';
import list from './list';

export default combineReducers({
    edit,
    list,
});
