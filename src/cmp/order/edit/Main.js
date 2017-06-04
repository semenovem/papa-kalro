import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderEditDoc from '../../../cmp/order/edit/Doc';
import OrderEditClient from '../../../cmp/order/edit/client/Client';
import OrderEditAddr from '../../../cmp/order/edit/Addr';
import OrderEditDelivery from '../../../cmp/order/edit/delivery/Main';
import OrderEditAssembly from '../../../cmp/order/edit/assembly/Main';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import AddrGeo from '../../addr/OrderEditGeo';
import Paper from 'material-ui/Paper';

/**
 * Редактирование заказа
 */
class Edit extends Component {

    /**
     * Обработчик чекбока включения/выключения доставки
     * @param e
     * @param {Boolean} check
     */
    onChangeDeliveryHas = (e, check) => {
        this.props.deliveryHas^check && this.props.changeDeliveryHas(check);
    };

    /**
     * Обработчик чекбока включения/выключения услуги сборка
     * @param e
     * @param {Boolean} check
     */
    onChangeAssemblyHas = (e, check) => {
        this.props.assemblyHas^check && this.props.changeAssemblyHas(check);
    };

    render() {

        const deliveryEl = [
            <Checkbox
                key="0"
                className="indent-top-l"
                label="Доставка"
                style={{}}
                onCheck={this.onChangeDeliveryHas}
                checked={this.props.deliveryHas}
            />,
            this.props.deliveryHas && <OrderEditDelivery key="1"/>
        ];

        const assemblyEl = [
            <Checkbox
                key="0"
                className="indent-top-l"
                label="Сборка"
                style={{}}
                onCheck={this.onChangeAssemblyHas}
                checked={this.props.assemblyHas}
            />,
            this.props.assemblyHas && <OrderEditAssembly className="indent-top-l" key="1"/>
        ];



        return (
            <div className={this.props.className}>
                <OrderEditDoc/>
                <OrderEditClient className="indent-top-l"/>
                
                <Paper className="indent-top-l indent-in-m">
                    <OrderEditAddr/>
                    <AddrGeo/>
                </Paper>

                {this.props.deliveryHas ?
                    <Paper className="indent-top-l indent-in-m" children={deliveryEl}/> : deliveryEl}

                {this.props.assemblyHas ?
                    <Paper className="indent-top-l indent-in-m" children={assemblyEl}/> : assemblyEl}


                {/*<Checkbox*/}
                    {/*className="indent-top-l"*/}
                    {/*label="Сборка"*/}
                    {/*style={{}}*/}
                    {/*onCheck={this.onChangeAssemblyHas}*/}
                    {/*checked={this.props.assemblyHas}*/}
                {/*/>*/}
                {/*{this.props.assemblyHas && <OrderEditAssembly className="indent-top-l"/>}*/}


                <div className="indent-top-l">
                    <RaisedButton
                        label="Сохранить"
                        primary={true}
                        style={{}}
                        disabled={true}
                        onTouchTap={() => { console.log('tap') }}
                    />
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        deliveryHas: state.order.edit.delivery.has,
        assemblyHas: state.order.edit.assembly.has,
    }),
    dispatch => ({

        /**
         * Изменение состояния вкл/выкл доставка
         * @param {Boolean} has
         */
        changeDeliveryHas: (has) => dispatch({
            type: 'ORDER.EDIT.DELIVERY.HAS.CHANGE',
            has
        }),

        /**
         * Изменение состояния вкл/выкл доставка
         * @param {Boolean} has
         */
        changeAssemblyHas: (has) => dispatch({
            type: 'ORDER.EDIT.ASSEMBLY.HAS.CHANGE',
            has
        })
        

    })
)(Edit);
