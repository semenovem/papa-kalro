import React, {Component} from 'react';
import {connect} from 'react-redux';
import TelCreate from '../../../tel/Create';
import { clientTelCreate } from '../../../../actions/order/edit';


/**
 * Создание нового телефонного номера
 */
class ClientTelCreate extends Component {

    /**
     * Обработчик создание нового телефонного номера
     */
    onCreateTel = () => {
        this.props.createTel();
    };

    render() {
        return (
            <TelCreate onCreate={this.onCreateTel}/>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        /**
         * Создает новый номер телефона
         */
        createTel: () => dispatch(clientTelCreate)

    })
)(ClientTelCreate);

