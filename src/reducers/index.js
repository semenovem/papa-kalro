import { combineReducers } from 'redux';
import menu from './menu';
//import delivery from './delivery/main';
import order from './order/main';
import product from './product';

export default combineReducers({
    menu,
    order,
    product
})
