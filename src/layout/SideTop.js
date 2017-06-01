import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';

import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 *
 */
class SideTop extends Component {

    render() {
        return (<AppBar
            title="Папа Карло"
            iconElementRight={<IconMenu
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'top'
                }}
                targetOrigin={{
                    horizontal: 'left',
                    vertical: 'top'
                }}
            >
              <MenuItem primaryText="Refresh"/>
              <MenuItem primaryText="Send feedback"/>
              <MenuItem primaryText="Settings"/>
              <MenuItem primaryText="Help"/>
              <MenuItem primaryText="Sign out"/>
            </IconMenu>}
            onLeftIconButtonTouchTap={this.props.openMenu}
        />)
    }
}

export default connect(
    state => ({
        visibility: state.menu.visibility
    }),
    dispatch => ({
        openMenu: () => {
           dispatch({ type: 'MENU.CHANGE.VISIBILITY', visibility: true })
        }
    })
)(SideTop);
