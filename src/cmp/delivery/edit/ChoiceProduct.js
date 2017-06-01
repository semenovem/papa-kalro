import React, {Component} from 'react';
import {connect} from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Выбор услуг доставки
 */
class ChoiceProduct extends Component {

    /**
     * Изменение выбранных товаров/услуг
     * @param event
     * @param index
     * @param values
     */
    onChange = (event, index, values) => {
        const nums = values.filter(val => typeof val === 'number');
        this.props.addUnitProdict(nums);
    };

    /**
     * Создает список дочерних элментов
     * @param {Array} price
     * @returns {Array}
     */
    menuItems(price) {
        return price.map((item) => (
            <MenuItem
                key={item.id}
                insetChildren={true}
                checked={this.props.ordering.indexOf(item.id) > -1}
                value={item.id}
                primaryText={item.name}
            />
        ));
    }

    render() {
        const value = Array.prototype.concat(this.props.price, this.props.ordering);
        return (
            <SelectField
                multiple={true}
                value={value}
                onChange={this.onChange}
                selectionRenderer={() => 'Добавить услуги'}
                autoWidth={true}
            >
                {this.menuItems(this.props.price)}
            </SelectField>
        )
    }
}

export default connect(
    state => ({
        price: state.price.filter(item => item.section === 'delivery'),
        ordering: state.order.edit.ordering
    }),
    dispatch => ({
        /**
         * Добавать товар/услугу в список
         * @param idLi выбранные id товаров/услуг
         */
       addUnitProdict: (idLi) => dispatch({
            type: 'ORDER.EDIT.DELIVERY.PRODUCT.ADD',
            value: idLi
       })
    })
)(ChoiceProduct);
