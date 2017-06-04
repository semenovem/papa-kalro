import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import './order-edit.css';

/**
 * Редактирование адреса заказа
 *
 * @param {Function} props.changeValue(value) обработчик
 * @param {ModelAddrBase} addr
 */
class OrderEdit extends Component {
    /**
     * Изменение номера телефона
     */
    onChangeValue = (e, val) => {
        this.props.changeValue(val);
    };

    render() {
        return (
            <TextField
                floatingLabelText="Адрес"
                multiLine={true}
                rows={1}
                rowsMax={4}
                fullWidth={true}
                value={this.props.addr.value}
                onChange={this.onChangeValue}
            />
        )
    }
}

export default OrderEdit;


