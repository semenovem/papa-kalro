import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * Меню
 */
class Menu extends Component {
    /**
     * Обработчик события на закрытие меню
     */
    onRequestChange = () => this.handleClose();

    /**
     * Выбор пункта меню
     */
    onActionItem = (id) => {
        this.props.selectItem(id);
        this.handleClose();
    };

    /**
     * Закрывает меню
     */
    handleClose = () => this.props.closeMenu();

    /**
     *
     */
    render() {
        const menuItems = this.props.menu.items.map((item, ind) => {
            return <MenuItem
                key={ind}
                onTouchTap={this.onActionItem.bind(this, item.id)}

                // todo исправить выражение - что бы не создавать пустой объект
                style={this.props.menu.selected === item.id ? {
                    'backgroundColor': 'rgba(0,0,0,0.2)'
                } : {}}
            >
                {item.name}
            </MenuItem>
        });

        return (
            <Drawer
                open={this.props.menu.visibility}
                onRequestChange={this.onRequestChange}
                docked={false}
            >
                {menuItems}
            </Drawer>
        );
    }
}

export default connect(
    state => ({
        menu: {
            items: state.menu.items,
            selected: state.menu.selectedId,
            visibility: state.menu.visibility
        }
    }),
    dispatch => ({
        selectItem: (id) => {
           dispatch({ type: 'MENU.SELECT.ITEM', id })
        },
        closeMenu: () => {
            dispatch({ type: 'MENU.CHANGE.VISIBILITY', visibility: false })
        }
    })
)(Menu);
