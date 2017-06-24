import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import iconKeyEnter from '../../resource/icon/ic_keyboard_return_black_24px.svg';
import iconKeyEnterDisabled from '../../resource/icon/ic_keyboard_return_disabled_24px.svg';
import './list-integer.css';
import {is as intIs} from '../../validator/int';

/**
 * Список натуральных чисел, из которого можно выбрать только одно значение
 * Есть текстовое поле, в котором можно ввести любое допустимое значение
 *
 * @param {[Number]|{value: Number, id: Number}[]} props.optionLi - набор примитивов Number, либо объекты
 * @param {{}} props.field - описание поля с возможностью ввести значение к клавиатуры
 * если объект есть - поле будет показано
 * {
 *      min,
 *      max,
 * }
 *
 * @param {Number} props.value выбранное значение
 * @param {Function} props.change(value) обработчик изменений значений
 */
class ListInteger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldHas: Boolean(this.props.field),
            fieldValid: false,
            fieldEmpty: true,
            fieldText: '',
            /**
             * найдено ли значение value среди option
             */
            isFoundOptionSelected: false
        }
    }

    /**
     * Флаг, указывает, что value найден среди пунктов меню
     * @type Boolean
     */
    isFoundOptionSelected = false;

    /**
     * Проверяет, найденно ли значение среди пунктов меню
     * Если не найдено - указывает это значение в поле field
     */
    componentDidMount() {
        if (!this.isFoundOptionSelected && this.state.fieldHas) {
            this.changeField(String(this.props.value));
        }
    }

    /**
     * Обработчик изменения выбраных пунктов в меню
     */
    onChangeMenu = (event, val) => {
        this.props.change(val);
    };

    /**
     * Создает элемент
     * @param item
     */
    createItem = (item) => {
        let selected;
        switch (typeof item) {
            case 'number':
                selected = this.props.value === item;

                if (selected) {
                    this.isFoundOptionSelected = true;
                }

                return <MenuItem
                    primaryText={String(item)}
                    value={item}
                    key={item}
                    checked={selected}
                    disabled={selected}
                    insetChildren={true}
                />;

            case 'object':
                // todo здесь не сделано selected + disabled
                if (selected) {
                    this.isFoundOptionSelected = true;
                }
                if (item && !Array.isArray(item)) {
                    return <MenuItem
                        primaryText={item.value}
                        value={item.id}
                        key={item.id}
                    />;
                }

            default:
                // <debug>
                console.warn('проверь тип данных: ', item);
                // </debug>

                return item;
        }
    };

    /**
     * Обработчик изменения значения в поле
     * @param event
     * @param {String} text содержимое текстового поля
     */
    onChangeField = (event, text) => {
        this.changeField(text);
    };

    /**
     * Обработчик изменения значения в поле
     * @param {String} text содержимое текстового поля
     */
    changeField = (text) => {
        const value = parseInt(text);
        const valid = this.validField(value);

        this.setState({
            fieldValid: valid,
            fieldEmpty: !text.length,
            fieldText: text
        })
    };

    /**
     * Проверяет валидность введенного значения
      * @param val
     * @returns {*|boolean}
     */
    validField = (val) => {
        const field = this.props.field;
        return intIs(val) &&
            ('min' in field === false || val >= field.min) &&
            ('max' in field === false || val <= field.max);
    };

    /**
     * Обработчик кнопки в текстовом поле, отпрвляющая данные родительскому методу
     */
    onFieldChange = () => {
        this.props.change(parseInt(this.state.fieldText));
    };



    render() {
        return (
            <div className="choice-list-value">
                <Menu desktop={true} onChange={this.onChangeMenu} disableAutoFocus={true}>
                    {this.props.optionLi.map(this.createItem)}
                </Menu>

                {this.state.fieldHas && <div className="indent-left-m indent-right-m select-list-integer-field-custom">
                    <TextField
                        fullWidth={true}
                        hintText='Свое значение'
                        onChange={this.onChangeField}
                        errorText={!this.state.fieldEmpty && !this.state.fieldValid && 'Можно ввести только число'}
                        value={this.state.fieldText}
                        ref={el => console.log('el:', el)}
                    />

                    <IconButton
                        disabled={!this.state.fieldValid || this.state.fieldEmpty}
                        onTouchTap={this.onFieldChange}
                    >
                      <img src={
                          this.state.fieldValid && !this.state.fieldEmpty ?
                          iconKeyEnter : iconKeyEnterDisabled} alt='press enter'/>
                    </IconButton>
                </div>}
            </div>
        )
    }
}

export default ListInteger;
