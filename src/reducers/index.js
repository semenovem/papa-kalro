import { combineReducers } from 'redux';
import menu from './menu';
import orderCreate from './orderCreate';
//import delivery from './delivery/main';
import order from './order/main';
import price from './price';

export default combineReducers({
    menu,
    orderCreate,  // todo deprecated
  //  delivery,
    order,
    price
})
