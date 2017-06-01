import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';

/**
 *
 */
class CreateAddr extends Component {
    /**
     * Обработчик изменения адреса
     * @param e
     * @param {String} val
     */
    onChange = (e, val) => {
        this.props.change(val);
    };

    render() {
        return (
            <TextField
                floatingLabelText="Адрес"
                multiLine={true}
                rows={1}
                rowsMax={4}
                fullWidth={true}
                value={this.props.addr}
                onChange={this.onChange}
            />
        );
    }
}

export default connect(
    state => {
        return {
            addr: state.orderCreate.client.addr.value
        }
    },
    dispatch => ({
        /**
         * Изменение адреса
         */
        change: (value) => dispatch({
            type: 'ORDER.CREATE.CLIENT.ADDR.VALUE.CHANGE',
            value
        })
    })
)(CreateAddr);
