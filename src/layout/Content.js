import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderList from '../module/OrderList';
import OrderCreate from '../module/OrderCreate';


import Order_Create from '../module/order/create/Main';

class Content extends Component {

    /**
     * Должен ли компонент обновится.
     * Если выбранный пункт меню не изменился - не нужно рендерить
     * @param {Object} nextProps
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps) {
        return this.props.menu.path !== nextProps.menu.path;
    }

    render() {
        switch (this.props.menu.path) {
            case 'orderList': return <OrderList />;
            case 'orderNew': return <Order_Create />;
            //case 'orderNew': return <OrderCreate />;


            default: return <div></div>;
        }
    }
}

export default connect(
    state => {
        const menu = state.menu;
        return {
            menu: {
                path: menu.items.filter(item => item.id === menu.selectedId)[0].path
            }
        }
    },
    dispatch => ({})
)(Content);
