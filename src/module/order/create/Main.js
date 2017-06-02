import React from 'react';
import {connect} from 'react-redux';
import Edit from '../edit/Main';
import CircularProgress from 'material-ui/CircularProgress';
import './main.css';

import ModelOrderEdit from '../../../model/order/edit';
import ModelTelBase from '../../../model/tel/base';

/**
 * Создание новой записи
 * проверить, есть ли запись на редактировании
 *
 * -----------------------------------------------------------------------------
 * !props.edit.has              | props.edit.has
 * -----------------------------+---------------------+-------------------------
 * create new ModelOrderEdit    | isNew               | !isNew
 *                              +---------------------+-------------------------
 *                              | continue edit       | save current editing
 *                                                    | and create new ModelOrderEdit
 *
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Main = (props) => {
    const edit = props.edit;
    
    if (!edit.has) {
        props.createModelOrderEdit();
        return <CircularProgress size={80} thickness={5} />
    }

    if (!edit.isNew && edit.hasModify) {
        return (<div>
            todo:
            есть изменения в существующей записи
            запросить пользователя - что делать, сохранить изменения / откатить / отменить
        </div>)
    }

    return <Edit />
};

export default connect(
    state => ({
        edit: state.order.edit
    }),
    dispatch => ({
        /**
         * Создает объект заказа
         */
        createModelOrderEdit: () => {
            dispatch(() => {
                setTimeout(() => {
                       dispatch({
                           type: 'ORDER.EDIT.CREATED',
                           modelOrderEdit: ModelOrderEdit({
                               client: {
                                   telLi: [
                                       ModelTelBase({ id: -1 })
                                   ]
                               }
                           })
                       })
                   }, 1);
            });
        }
    })
)(Main);

