import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import './list-value-single.css';
import FieldNumber from '../field/Number';

/**
 * Список значений для выбора
 * @param {[]|{}[]} props.valueLi - либо набор значений, либо объекты { text, id }
 * @param {[{ type: String, min, max, }]} props.valueCustom массив описаний полей
 *
 * для чисел(type: number): минимальное, максимальное значение, шаг
 *
 * @param {Function} choice(val[])
 */
class ListValueSingle extends Component {

    /**
     * Обработчик изменения выбраных пунктов в меню
     */
    onChangeMenu = (...args) => {

        console.log('change menu', args);
    };

    /**
     * Создает элемент
     * @param item
     */
    createItem = (item) => {
        let text, value;

        if (typeof item === 'number') {
            text = String(item);
            value = item;
        }
        if (typeof item === 'string') {
            value = text = item;
        }
        if (typeof item === 'object') {
            text = item.val;
            value = item.id
        }

        return <MenuItem
            primaryText={text}
            value={value}
            key={text}
        />
    };
    
    render() {
        return (
            <div className="choice-list-value">
                <Menu desktop={true} onChange={this.onChangeMenu}>
                    {this.props.valueLi.map(this.createItem)}
                </Menu>

                <div className="indent-left-m indent-right-m">
                    <TextField
                        fullWidth={true}
                        hintText="Свое значение"
                    />
                </div>
            </div>
        )
    }
}

export default ListValueSingle;
