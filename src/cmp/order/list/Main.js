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
        const list = state.order.list;
        return {
            list
        }
    },
    dispatch => ({})
)(List);
