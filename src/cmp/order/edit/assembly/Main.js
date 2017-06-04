import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import ProdictChoice from './ProductChoice';
import ItemList from './ItemList';

/**
 * Редактирование данных доставки
 */
class Assembly extends Component {
    /**
     * Обработчик изменения в поле Номер документа
     * @param e
     * @param {String} val
     */
    onChangeNote = (e, val) => {
        this.props.changeNote(val);
    };

    render() {
        return (
            <div className={this.props.className}>
                <ProdictChoice className="indent-top-s"/>
                <ItemList className="indent-top-s"/>

                <TextField
                    floatingLabelText="Комментарий к сборке"
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}
                    value={this.props.assembly.note}
                    onChange={this.onChangeNote}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        assembly: state.order.edit.assembly
    }),
    dispatch => ({
        /**
         * Изменение данных клиента
         * @param {String} note
         */
        changeNote: (note) => dispatch({
            type: 'ORDER.EDIT.ASSEMBLY.NOTE.CHANGE',
            note
        }),
    })
)(Assembly);


