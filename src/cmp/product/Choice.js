import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Выбор товаров/услуг
 *
 * @param {ModelProductBase[]} props.productLi список товаров/услуг
 * @param {ModelProductBase[]} props.productIdLiSelected выбранные товары/услуги
 * @param {Function} props.add обработчик добавления товара/услуги
 * @param {Function} props.remove обработчик удаления товара/улуги
 */
class Choice extends Component {
    constructor(props) {
        super(props);
        this.prepare();
    }

    componentWillUpdate(props) {
        this.prepare(props.productIdLiSelected);
    }

    /**
     * Подготовка данных
     */
    prepare(productIdLiSelected) {
        const li = productIdLiSelected || this.props.productIdLiSelected;
        /**
         * @type {{ModelProductBase.id}} выбранные товары/услуги
         */
        this.productIdHashSelected = li.reduce((res, id) => ((res[id] = true) && res), {});
    }

    /**
     * Изменение выбранных товаров/услуг
     * @param event
     * @param index
     * @param values
     */
    onChange = (event, index, values) => {
        const value = values.filter(val => typeof val === 'number');
        const add = value.filter(val => !this.productIdHashSelected[val]);
        const remove = this.props.productIdLiSelected.filter(id => !~value.indexOf(id));

        add.length && this.props.add(add);
        remove.length && this.props.remove(remove);
    };

    /**
     * Создает список дочерних элементов
     * @param {Array} productLi
     * @returns {Array}
     */
    menuItems = (productLi) => {
        return productLi.map((product) => (
            <MenuItem
                key={product.id}
                insetChildren={true}
                checked={this.productIdHashSelected[product.id]}
                value={product.id}
                primaryText={product.nameS}
            />
        ));
    };

    render() {
        return (
            <SelectField
                multiple={true}
                value={this.props.productIdLiSelected}
                onChange={this.onChange}
                selectionRenderer={() => 'Добавить услуги'}
                autoWidth={true}
            >
                {this.menuItems(this.props.productLi)}
            </SelectField>
        )
    }
}

export default Choice
