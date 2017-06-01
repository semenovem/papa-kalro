import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import './create-addr-geo.css';

/**
 *
 */
class CreateAddrGeo extends Component {


    render() {
        return (
            <Paper className="cmp-client-create-addr-geo">
                <h3>карта с выбранным адресом</h3>
            </Paper>
        );
    }
}

export default connect(
    state => {
        return {
            geo: state.orderCreate.client.addr.geo
        }
    },
    dispatch => ({
        /**
         * Изменение геокоординат
         */
        change: (value) => dispatch({
            type: 'ORDER.CREATE.CLIENT.ADDR.GEO.CHANGE',
            value
        })
    })
)(CreateAddrGeo);
