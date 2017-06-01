import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderEditClientTel from '../../../tel/Edit';

/**
 * Редактирование номеров телефонов
 */
class Tel extends Component {

    /**
     * Обработчик изменений данных
     * @param {ModelTelBase} telLi
     */
    change = (telLi) => {
        this.props.changeTelLi(telLi);
    };

    render() {
        return (
            <OrderEditClientTel
                telLi={this.props.telLi}
                onChange={this.change}
            />
        )
    }
}

export default connect(
    state => ({
        telLi: state.order.edit.client.telLi
    }),
    dispatch => ({

        /**
         * Изменение данных номеров телефонов
         * @param {ModelTelBase[]} telLi
         */
        changeTelLi: (telLi) => dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.CHANGE',
            value: telLi
        }),
    })
)(Tel);


