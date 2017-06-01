import React, {Component} from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ClientCreate from '../cmp/client/Create';
import '../css/indent.css';
import './order-create.css';
import ModuleTitle from '../cmp/ModuleTitle';

import DiliveryEdit from '../cmp/delivery/edit/Main';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';


import ModelOrderEdit from '../model/order/edit';


class OrderCreate extends Component {
    /**
     * Обработчик изменения в поле Номер документа
     * @param e
     * @param {String} val
     */
    onChangeSourceDocNum = (e, val) => {
        this.props.changeSourceDocNum(val);
    };

    /**
     * Обработчик изменения чекбокса - есть/нет доставки
     * @param e
     * @param val
     */
    onChangeDeliveryHas = (e, val) => {
        this.props.changeHasDelivery(val);
    };

    render() {

        console.log(ModelOrderEdit())

        return (
            <div className="module-order-create">
                <ModuleTitle className="indent-m indent-top"/>

                <TextField
                    className="indent-right-m indent-left-m"
                    floatingLabelText="Номер документа"
                    value={this.props.sourceDoc.num}
                    onChange={this.onChangeSourceDocNum}
                />



                <ClientCreate
                    className="indent-top-m indent-right-m indent-left-m"
                    dataClient={this.props.client}
                />

            

                <Paper className="indent-m indent-in-m indent-top-xl">
                    <Checkbox label="Доставка" checked={this.props.delivery.has} onCheck={this.onChangeDeliveryHas} />
                    {this.props.delivery.has && <DiliveryEdit/>}
                </Paper>
                

                <div className="indent-out indent-top-l">
                    <RaisedButton
                        label="Сохранить"
                        primary={true}
                        style={{}}
                        disabled={true}
                        onTouchTap={() => { console.log() }}
                    />
                </div>
            </div>
        )
    }
}


export default connect(
    state => {
        const orderCreate = state.orderCreate;
        const client = orderCreate.client;


        return {
            sourceDoc: state.order.edit.sourceDoc,
            delivery: state.order.edit.delivery,

            // old
            client: {
                fio: client.fio,
                tel: client.tel,
                addr: client.addr,

            }
        }
    },
    dispatch => ({
        /**
         * Изменение номера документа
         * @param val
         */
        changeSourceDocNum: (val) => dispatch({
            type: 'ORDER.EDIT.SOURCE_DOC.NUM.CHANGE',
            value: val
        }),

        changeHasDelivery: (value) => dispatch({
            type: 'ORDER.EDIT.DELIVERY.HAS.CHANGE',
            value
        })
    })
)(OrderCreate);
