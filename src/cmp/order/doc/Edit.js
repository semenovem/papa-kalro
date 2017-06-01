import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

/**
 * Редактирование документов
 *
 * @param {Function} props.onChange обработчик изменения данных
 * @param {ModelOrderDocBase} doc
 */
class Doc extends Component {

    /**
     * Обработчик изменения в поле Номер документа
     * @param e
     * @param {String} val
     */
    onChangeNum = (e, val) => {
        this.props.onChange({
            ...this.props.doc,
            num: val
        });
    };

    render() {
        return (
            <div className={this.props.className}>
                <TextField
                    floatingLabelText="Номер документа"
                    value={this.props.doc.num}
                    onChange={this.onChangeNum}
                />
            </div>
        )
    }
}

export default Doc;


