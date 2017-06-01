import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderDocEdit from '../doc/Edit';

/**
 * Реактирование документы заказа
 */
class Doc extends Component {

    /**
     * Обработчик изменений
     * @param {ModelOrderDocBase} doc
     */
    change = (doc) => {
        this.props.changeDoc(doc);
    };

    render() {
        return (
            <OrderDocEdit
                doc={this.props.doc}
                onChange={this.change}
            />
        );
    }
}

export default connect(
    state => ({
        doc: state.order.edit.doc
    }),
    dispatch => ({

        /**
         * Изменение номера документа
         * @param {ModelOrderDocBase} doc
         */
        changeDoc: (doc) => dispatch({
            type: 'ORDER.EDIT.DOC.CHANGE',
            doc
        }),
    })
)(Doc);


