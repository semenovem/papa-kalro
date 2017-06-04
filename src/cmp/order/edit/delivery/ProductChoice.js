import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductChoiceView from '../../../product/Choice';
import {filterItemLiBySection} from '../../../../data/product/base'
import getUniqueId from '../../../../core/unique';
import ModelOrderItem from '../../../../model/order/item';

/**
 *  Выбор товара/услуги из раздела доставка
 */
class ProductChoice extends Component {

    /**
     * Добавляет услугу/товар к заказу
     * @param {ModelProductBase.id[]} productIdLi
     */
    add = (productIdLi) => {
        this.props.itemAdd(productIdLi);
    };

    /**
     * Удаляет услугу/товар из заказа
     * @param {ModelProductBase.id[]} productIdLi
     */
    remove = (productIdLi) => {

        const itemLiRemove = this.props.itemLi
            .filter(item => ~productIdLi.indexOf(item.productId))
            .map(item => item.id);
        this.props.itemRemove(itemLiRemove);
    };

    render() {
        return (
            <div className={this.props.className}>
                <ProductChoiceView
                    productLi={this.props.productLi}
                    productIdLiSelected={this.props.itemLi.map(i => i.productId)}
                    add={this.add}
                    remove={this.remove}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        productLi: state.product.section.DELIVERY,
        itemLi: filterItemLiBySection(state.order.edit.itemLi, 'DELIVERY')
    }),
    dispatch => ({
        /**
         * Создает новый товар/услугу в заказе
         * @param {ModelProductBase.id[]} productIdLi
         */
        itemAdd: productIdLi => {
            dispatch({
                type: 'ORDER.EDIT.ITEM.ADD',
                itemLiToAdd: productIdLi.map(productId => ModelOrderItem({
                    id: getUniqueId(),
                    productId
                }))
            })
        },
        /**
         * Удаляет товар/услугу
         * @param {ModelOrderItem.id[]} itemLiRemove
         */
        itemRemove: (itemLiRemove) => {
            dispatch({
                type: 'ORDER.EDIT.ITEM.REMOVE',
                itemLiToRemove: itemLiRemove
            })
        }
    })
)(ProductChoice);

