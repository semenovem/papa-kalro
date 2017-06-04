import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemListView from '../itemList/Main';
import {filterItemLiBySection} from '../../../../data/product/base';

/**
 * Список товаров/услуг из раздела "assembly"
 */
class ItemList extends Component {

    change = () => {
        console.log('111');
    };

    render() {
        return (
            <ItemListView
                className={this.props.className}
                itemLi={this.props.itemLi}
            />

        )
    }
}

export default connect(
    state => ({
        itemLi: filterItemLiBySection(state.order.edit.itemLi, 'ASSEMBLY')
    }),

    
    dispatch => ({
        /**
         * @param
         */
        changeDocNum: (val) => dispatch({
            type: '',
            value: val
        }),
    })
)(ItemList);


