import React from 'react';
import ModuleTitle from '../../../cmp/ModuleTitle';
import OrderEdit from '../../../cmp/order/edit/Edit';
import './main.css';

const Main = () => {

    return (
        <div className="module-order-edit-main indent-in-l">
            <ModuleTitle/>
            <OrderEdit/>
        </div>
    )
};

export default Main;
