import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import './client-edit.css';
import Delete from 'material-ui/svg-icons/action/delete';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

/**
 * Редактирование номеров телефонов
 *
 * @param {Function} props.onChangeValue(ModelTelBase.id, (ModelTelBase.value) обработчик изменения данных - номер
 *     телефона
 * @param {Function} props.onChangeNote(ModelTelBase.id, (ModelTelBase.note) обработчик изменения данных - описание
 * @param {Function} props.onRemove(ModelTelBase.id) обработчик удаления номера телефона
 * @param {ModelTelBase[]} telLi
 */
class ClientEdit extends Component {
    /**
     * Изменение номера телефона
     */
    onChangeValue = (id, e, val) => {
        this.props.onChangeValue(id, val);
    };

    /**
     * Изменение описания номера телефона
     */
    onChangeNote = (id, e, val) => {
        this.props.onChangeNote(id, val);
    };

    /**
     * Удаление номера телефона
     */
    onRemove = (id) => {
        this.props.onRemove(id);
    };

    /**
     * Подготовка дочерних элементов
     * @param {ModelTelBase[]} items
     */
    prepItems(items) {
        const canRemoved = items.length > 1;
        return items.map((tel) => (
            <div className="tel-client-edit" key={tel.id}>
                <TextField
                    floatingLabelText="телефон"
                    fullWidth={true}
                    value={tel.value}
                    onChange={this.onChangeValue.bind(this, tel.id)}
                />
                <TextField
                    hintText="Описание"
                    multiLine={true}
                    rows={1}
                    rowsMax={2}
                    fullWidth={true}
                    value={tel.note}
                    onChange={this.onChangeNote.bind(this, tel.id)}
                />

                {canRemoved && this.btnRemove(tel.id, tel.value, tel.note)}
            </div>
        ), this);
    }

    /**
     * Кнопка удаления номер телефона клиента
     * @param id
     * @param value
     * @param note
     * @returns {XML}
     */
    btnRemove(id, value, note) {
        return (
            !value && !note ? <IconButton>
                <Delete
                    className="tel-client-edit-remove-icon"
                    onTouchTap={this.onRemove.bind(this, id)}
                />
            </IconButton> :

                <IconMenu
                    iconButtonElement={<IconButton>
                        <Delete className="tel-client-edit-remove-icon"/>
                    </IconButton>}
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                    targetOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                >
                    <MenuItem primaryText="отмена"/>
                    <MenuItem primaryText="удалить" onTouchTap={this.onRemove.bind(this, id)}/>
                </IconMenu>
        )
    }

    render() {
        return (
            <div>
                {this.prepItems(this.props.telLi)}
            </div>
        )
    }
}

export default ClientEdit;


