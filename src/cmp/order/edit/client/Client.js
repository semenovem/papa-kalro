import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientEdit from '../../../client/Edit';
import OrderEditClientTel from './Tel';
import OrderEditClientTelCreate from './TelCreate';


/**
 * Редактирование клиента
 */
class Client extends Component {

    /**
     * Обработчик изменений данных
     * @param {ModelClientBase} client
     */
    change = (client) => {
        this.props.changeDocNum(client);
    };

    render() {
        return (
            <div>
                <ClientEdit
                    className={this.props.className}
                    client={this.props.client}
                    onChange={this.change}
                />

                <OrderEditClientTel/>
                <OrderEditClientTelCreate/>
            </div>
        )
    }
}

export default connect(
    state => ({
        client: state.order.edit.client
    }),
    dispatch => ({

        /**
         * Изменение данных клиента
         * @param {ModelClientBase} client
         */
        changeDocNum: (client) => dispatch({
            type: 'ORDER.EDIT.CLIENT.CHANGE',
            value: client
        }),
    })
)(Client);


