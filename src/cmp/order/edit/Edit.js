import React from 'react';
import {connect} from 'react-redux';
import OrderEditDoc from '../../../cmp/order/edit/Doc';
import OrderEditClient from '../../../cmp/order/edit/client/Client';
import OrderEditAddr from '../../../cmp/order/edit/Addr';
import OrderEditDelivery from '../../../cmp/order/edit/Delivery';
import OrderEditAssembly from '../../../cmp/order/edit/Assembly';
import RaisedButton from 'material-ui/RaisedButton';
/**
 * Редактирование заказа
 * @param props
 * @constructor
 */
const Edit = (props) => {

    return (
        <div className={props.className}>
            <OrderEditDoc/>
            <OrderEditClient className="indent-top-l"/>
            <OrderEditAddr className="indent-top-l"/>
            <OrderEditDelivery className="indent-top-l"/>
            <OrderEditAssembly className="indent-top-l"/>

            <div className="indent-top-l">
                <RaisedButton
                    label="Сохранить"
                    primary={true}
                    style={{}}
                    disabled={true}
                    onTouchTap={() => { console.log('tap') }}
                />
            </div>
        </div>
    );
};

export default connect(
    state => ({}),
    dispatch => ({})
)(Edit);
