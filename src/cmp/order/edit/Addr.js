import React, {Component} from 'react';
import {connect} from 'react-redux';
import Addr from '../../addr/OrderEdit';

/**
 * Редактирование адреса
 */
class OrderAddr extends Component {

    /**
     * Обработчик изменения текстового написания
     * @param {String} value
     */
    changeValue = (value) => {
        this.props.changeLocation({
            ...this.props.addr,
            value
        });
    };

    render() {
        return (
            <Addr
                addr={this.props.addr}
                changeValue={this.changeValue}
            />

        )
    }
}

export default connect(
    state => ({
        addr: state.order.edit.addr
    }),
    dispatch => ({

        /**
         * Изменение адреса
         * @param {ModelAddrBase} addr
         */
        changeLocation:(addr) => dispatch({
            type: 'ORDER.EDIT.ADDR.CHANGE',
            addr
        }),
    })
)(OrderAddr);


