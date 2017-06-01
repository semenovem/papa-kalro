import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

/**
 * Редактирование данных клиента
 *
 * @param {Function} props.onChange обработчик изменения данных
 * @param {ModelClientBase} props.client
 */
class Client extends Component {

    /**
     * Обработчик изменения в поле Номер документа
     * @param e
     * @param {String} val
     */
    onChangeFIO = (e, val) => {
        this.props.onChange({
            ...this.props.client,
            fio: val
        });
    };

    render() {
        const client = this.props.client;

        return (
            <div className={this.props.className}>
                <TextField
                    floatingLabelText="ФИО"
                    fullWidth={true}
                    value={client.fio}
                    onChange={this.onChangeFIO}
                />

                
            </div>
        )
    }
}

export default Client;


