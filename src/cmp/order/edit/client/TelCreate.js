import React, {Component} from 'react';
import {connect} from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * Создание нового телефонного номера
 */
class TelCreate extends Component {

    /**
     * Обработчик создание нового телефонного номера
     */
    onCreateTel = (tel) => {
        this.props.createTel(tel);
    };

    render() {
        return (
            <FloatingActionButton
                mini={true}
                onTouchTap={this.onCreateTel}
            >
                <ContentAdd/>
            </FloatingActionButton>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({

        /**
         * Создает новый номер телефона
         */
        createTel: (tel) => dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.CREATE',
            value: tel
        })

    })
)(TelCreate);
