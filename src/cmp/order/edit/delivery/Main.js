import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import ProdictChoice from './ProductChoice';
import ItemList from './ItemList';

/**
 * Редактирование данных доставки
 */
class Delivery extends Component {
    /**
     * Обработчик изменения в поле Номер документа
     * @param e
     * @param {String} val
     */
    onChangeDeliveryNote = (e, val) => {
        this.props.changeDeliveryNote(val);
    };

    render() {
        return (
            <div className={this.props.className}>
                <ProdictChoice className="indent-top-s"/>
                <ItemList className="indent-top-s"/>

                <TextField
                    floatingLabelText="Комментарий к доставке"
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}
                    value={this.props.delivery.note}
                    onChange={this.onChangeDeliveryNote}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        delivery: state.order.edit.delivery
    }),
    dispatch => ({
        /**
         * Изменение данных клиента
         * @param {String} note
         */
        changeDeliveryNote: (note) => dispatch({
            type: 'ORDER.EDIT.DELIVERY.NOTE.CHANGE',
            note
        }),
    })
)(Delivery);


