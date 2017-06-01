import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import './edit.css';
import Delete from 'material-ui/svg-icons/action/delete';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

/**
 * Редактирование номеров телефонов
 *
 * @param {Function} props.onChange обработчик изменения данных
 * @param {ModelTelBase[]} telLi
 */
class TelLi extends Component {

    /**
     * Обработчик изменения
     * @param e
     * @param {String} val
     */
    onChangeNum = (e, val) => {
        this.props.onChange({
            ...this.props.doc,
            num: val
        });
    };

    /**
     * Подготовка дочерних элементов
     * @param {ModelTelBase[]} items
     */
    //prepItems(items) {
    //    const canRemoved = items.length > 1;
    //    return items.map((tel) => (
    //        <div className="cmp-client-create-tel-li" key={tel.id}>
    //            <TextField
    //                floatingLabelText="телефон"
    //                fullWidth={true}
    //                value={tel.value}
    //                onChange={this.onChangeValue.bind(this, tel.id)}
    //            />
    //            <TextField
    //                hintText="Описание"
    //                multiLine={true}
    //                rows={1}
    //                rowsMax={2}
    //                fullWidth={true}
    //                value={tel.note}
    //                onChange={this.onChangeNote.bind(this, tel.id)}
    //            />
    //
    //            {canRemoved && (
    //                // todo вынести в отдельную функцию
    //                !tel.value && !tel.note ? <IconButton>
    //                    <Delete
    //                        className="cmp-client-create-tel-li-remove-icon"
    //                        onTouchTap={this.onRemove.bind(this, tel.id)}
    //                    />
    //                </IconButton> :
    //
    //                    <IconMenu
    //                        iconButtonElement={<IconButton>
    //                            <Delete className="cmp-client-create-tel-li-remove-icon"/>
    //                        </IconButton>}
    //                        anchorOrigin={{
    //                            horizontal: 'left',
    //                            vertical: 'top'
    //                        }}
    //                        targetOrigin={{
    //                            horizontal: 'left',
    //                            vertical: 'top'
    //                        }}
    //                    >
    //                        <MenuItem primaryText="отмена"/>
    //                        <MenuItem primaryText="удалить" onTouchTap={this.onRemove.bind(this, tel.id)}/>
    //                    </IconMenu>)
    //            }
    //        </div>
    //    ), this);
    //}



    render() {
        console.log('66', this.props);

        return (
            <div>
                asdasdasd
                {/*{this.prepItems(this.props.telLi)}*/}
            </div>
        )
    }
}

export default TelLi;


