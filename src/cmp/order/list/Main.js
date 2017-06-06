import React, { Component } from 'react';
import { connect } from 'react-redux';



class List extends Component {

    ///**
    // * Если выбранный пункт меню не изменился - не нужно рендерить
    // * @param {Object} nextProps
    // * @returns {boolean}
    // */
    //shouldComponentUpdate(nextProps) {
    //    return this.props.menu.path !== nextProps.menu.path;
    //}

    render() {
        return (<div>order.list</div>)
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
)(List);
