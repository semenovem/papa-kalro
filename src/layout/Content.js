import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderList from '../module/order/list/Main';
import OrderCreate from '../module/order/create/Main';

class Content extends Component {

    /**
     * Если выбранный пункт меню не изменился - не нужно рендерить
     * @param {Object} nextProps
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps) {
        return this.props.menu.path !== nextProps.menu.path;
    }

    render() {
        switch (this.props.menu.path) {
            case 'order.list': return <OrderList />;
            case 'order.create': return <OrderCreate />;

            default: return <div>nothing</div>;
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
