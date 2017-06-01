import React, {Component} from 'react';
import {connect} from 'react-redux';

/**
 * Редактирование адреса
 */
class Delivery extends Component {

    ///**
    // * Обработчик изменения в поле Номер документа
    // * @param e
    // * @param {String} val
    // */
    //onChangeSourceDocNum = (e, val) => {
    //    this.props.changeDocNum(val);
    //};

    render() {
        return (
            <div className={this.props.className}>
                доставка
                {/*<TextField*/}
                    {/*floatingLabelText="Номер документа"*/}
                    {/*value={this.props.doc.num}*/}
                    {/*onChange={this.onChangeSourceDocNum}*/}
                {/*/>*/}
            </div>
        )
    }
}

export default connect(
    state => ({
        doc: state.order.edit.doc
    }),
    dispatch => ({

        /**
         * Изменение данных клиента
         * @param 
         */
        changeDocNum: (val) => dispatch({
            type: 'ORDER.EDIT.DOC.CLIENT.CHANGE',
            value: val
        }),
    })
)(Delivery);


