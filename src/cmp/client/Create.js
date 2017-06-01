import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CreateTelLi from './CreateTelLi';
import CreateAddr from './CreateAddr';
import CreateAddrGeo from './CreateAddrGeo';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = { fio: this.props.fio }
    }

    /**
     * Обработчик изменения данных в поле ФИО
     * @param e
     * @param {String} val
     */
    onChangeFIO = (e, val) => {
        this.props.changeFIO(val);
    };

    /**
     * Обработчик создания нового телефона
     */
    onCreateTel = () => {
        this.props.createTel();
    };

    render() {
        return (
            <div className={this.props.className}>
                <TextField
                    floatingLabelText="ФИО"
                    fullWidth={true}
                    value={this.props.fio}
                    onChange={this.onChangeFIO}
                />

                <CreateTelLi />

                <FloatingActionButton
                    mini={true}
                    onTouchTap={this.onCreateTel}
                >
                    <ContentAdd/>
                </FloatingActionButton>

               
                <CreateAddr/>
                <CreateAddrGeo/>
            </div>
        )
    }
}

export default connect(
    state => {
        const client = state.orderCreate.client;
        return {
            fio: client.fio,
            telLi: client.telLi,
            addr: client.addr
        }
    },
    dispatch => ({
        changeFIO: (val) => dispatch({
            type: 'ORDER.CREATE.CLIENT.FIO.CHANGE',
            // change_fio_in_form
            value: val
        }),
        createTel: () => dispatch({
            type: 'ORDER.CREATE.CLIENT.TEL.CREATE',
        })
    })
)(Create);
