import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemListView from '../itemList/Main';
import {filterItemLiBySection} from '../../../../data/product/base';

/**
 * Список товаров/услуг из раздела "delivery"
 */
class ItemList extends Component {

    /**
     * Изменяет кол-во товара/услуги
     * @param {Number} id
     * @param {Number} qty значение кол-ва позиции заказа
     */
    changeQty = (id, qty) => {
        this.props.changeQty(id, qty);
    };

    render() {
        return (
            <ItemListView
                className={this.props.className}
                itemLi={this.props.itemLi}
                changeQty={this.changeQty}
            />

        )
    }
}

export default connect(
    state => ({
        itemLi: filterItemLiBySection(state.order.edit.itemLi, 'DELIVERY')
    }),

    dispatch => ({
        /**
         * @param {Number} id
         * @param {Number} qty
         */
        changeQty: (id, qty) => dispatch({
            type: 'ORDER.EDIT.ITEM.QTY.CHANGE',
            id,
            qty,
        }),

    })
)(ItemList);


