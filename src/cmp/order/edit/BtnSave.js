import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {save as orderEditSave} from '../../../actions/order/edit';
import CircularProgress from 'material-ui/CircularProgress';
import './btn-save.css';

/**
 * Кнопка сохранения
 */
class BtnSave extends Component {

    /**
     * Сохранить
     */
    onSave = () => {
        this.props.save(this.props.model);
    };

    render() {
        const props = this.props;
        return (
            <div className={props.className + " order-edit-btn-save"}>
                <RaisedButton
                    label={props.model.isSaved ? 'Сохранение..' : 'Сохранить'}
                    primary={true}
                    style={{ width: '150px'}}
                    disabled={!props.model.isValid || props.model.isSaved}
                    onTouchTap={this.onSave}
                />
                {props.model.isSaved && <CircularProgress size={30} thickness={2} className="indent-left-s" />}
            </div>
        );
    }
}

export default connect(
    state => ({
        model: state.order.edit
    }),
    dispatch => ({
        /**
         * Сохраняет запись
         * @param {ModelOrderEdit} model
         */
        save: model => dispatch(orderEditSave(model))
    })
)(BtnSave);
