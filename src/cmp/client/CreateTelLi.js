import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import './create-tel-li.css';
import Delete from 'material-ui/svg-icons/action/delete';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

/**
 *
 */
class CreateTel extends Component {
    /**
     * Обработчик изменения номера телефона
     * @param {Number} id
     * @param e
     * @param {String} val
     */
    onChangeValue = (id, e, val) => {
        this.props.changeTelValue(id, val);
    };

    /**
     * Обработчик изменения описания
     * @param {Number} id
     * @param e
     * @param {String} val
     */
    onChangeNote = (id, e, val) => {
        this.props.changeTelNote(id, val);
    };

    /**
     * Удаляет объект номера телефона
     * @param id
     */
    onRemove = (id) => {
        this.props.removeTel(id);
    };

    render() {
        const canRemoved = this.props.telLi.length > 1;
        const items = this.props.telLi.map((tel) => (
            <div className="cmp-client-create-tel-li" key={tel.id}>
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

                {canRemoved && (
                    // todo если  пустые данные - удалять без подтверждения
                    !tel.value && !tel.note ? <IconButton>
                        <Delete
                            className="cmp-client-create-tel-li-remove-icon"
                            onTouchTap={this.onRemove.bind(this, tel.id)}
                        />
                    </IconButton> :

                        <IconMenu
                            iconButtonElement={<IconButton>
                                <Delete className="cmp-client-create-tel-li-remove-icon"/>
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
                            <MenuItem primaryText="удалить" onTouchTap={this.onRemove.bind(this, tel.id)}/>
                        </IconMenu>)
                }
            </div>
        ), this);
        
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            telLi: state.orderCreate.client.telLi
        }
    },
    dispatch => ({
        /**
         * Изменение номера телефона
         * @param {Number} id
         * @param {String} value
         */
        changeTelValue: (id, value) => dispatch({
            type: 'ORDER.CREATE.CLIENT.TEL.VALUE.CHANGE',
            id,
            value
        }),

        /**
         * Изменение описания к телефону
         * @param {Number} id
         * @param {String} note
         */
        changeTelNote: (id, note) => dispatch({
            type: 'ORDER.CREATE.CLIENT.TEL.NOTE.CHANGE',
            id,
            note
        }),

        /**
         * Удаляет объект номера телефона
         * @param id
         */
        removeTel: (id) => dispatch({
            type: 'ORDER.CREATE.CLIENT.TEL.REMOVE',
            id
        })
    })
)(CreateTel);
