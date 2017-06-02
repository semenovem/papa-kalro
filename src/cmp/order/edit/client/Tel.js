import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderEditClientTel from '../../../tel/ClientEdit';

/**
 * Редактирование номеров телефонов
 */
class TelLi extends Component {

    /**
     * Изменение номера телефона
     */
    onChangeValue = (id, val) => {
        this.props.changeValue(id, val);
    };

    /**
     * Изменение описания номера телефона
     */
    onChangeNote = (id, val) => {
        this.props.changeNote(id, val);
    };

    /**
     * Удаление номера телефона
     */
    onRemove = (id) => {
        this.props.remove(id);
    };

    render() {
        return (
            <OrderEditClientTel
                telLi={this.props.telLi}
                onChangeValue={this.onChangeValue}
                onChangeNote={this.onChangeNote}
                onRemove={this.onRemove}
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
         * Изменятся номер телефона
         */
        changeValue: (id, value) => dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.VALUE.CHANGE',
            id,
            value
        }),

        /**
         * Изменятся описание телефона
         */
        changeNote: (id, note) => dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.NOTE.CHANGE',
            id,
            note
        }),

        /**
         * Изменение данных номеров телефонов
         * @param {ModelTelBase[]} id
         */
        remove: (id) => dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.REMOVE',
            id
        }),
    })
)(TelLi);


