import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderEditDoc from '../../../cmp/order/edit/Doc';
import OrderEditClient from '../../../cmp/order/edit/client/Client';
import OrderEditAddr from '../../../cmp/order/edit/Addr';
import OrderEditDelivery from '../../../cmp/order/edit/delivery/Main';
import OrderEditAssembly from '../../../cmp/order/edit/assembly/Main';
import Checkbox from 'material-ui/Checkbox';
import AddrGeo from '../../addr/OrderEditGeo';
import Paper from 'material-ui/Paper';
import BtnSave from './BtnSave';

/**
 * Редактирование заказа
 */
class Edit extends Component {
    
    /**
     * Обработчик чекбокса включения/выключения доставки
     * @param e
     * @param {Boolean} check
     */
    onChangeDeliveryHas = (e, check) => {
        this.props.deliveryHas^check && this.props.changeDeliveryHas(check);
    };

    /**
     * Обработчик чекбокса включения/выключения услуги сборка
     * @param e
     * @param {Boolean} check
     */
    onChangeAssemblyHas = (e, check) => {
        this.props.assemblyHas^check && this.props.changeAssemblyHas(check);
    };

    render() {
        const props = this.props;
        const deliveryEl = [
            <Checkbox
                key="0"
                className="indent-top-l"
                label="Доставка"
                style={{}}
                onCheck={this.onChangeDeliveryHas}
                checked={props.deliveryHas}
            />,
            this.props.deliveryHas && <OrderEditDelivery key='1'/>
        ];

        const assemblyEl = [
            <Checkbox
                key="0"
                className="indent-top-l"
                label="Сборка"
                style={{}}
                onCheck={this.onChangeAssemblyHas}
                checked={props.assemblyHas}
            />,
            this.props.assemblyHas && <OrderEditAssembly className="indent-top-l" key="1"/>
        ];

        return (
            <div className={props.className}>
                <OrderEditDoc/>
                <OrderEditClient className="indent-top-l"/>
                
                <Paper className="indent-top-l indent-in-m">
                    <OrderEditAddr/>
                    <AddrGeo/>
                </Paper>

                {props.deliveryHas ?
                    <Paper className="indent-top-l indent-in-m" children={deliveryEl}/> : deliveryEl}

                {props.assemblyHas ?
                    <Paper className="indent-top-l indent-in-m" children={assemblyEl}/> : assemblyEl}

                <BtnSave className="indent-top-l"/>
            </div>
        );
    }
}

export default connect(
    state => ({
        deliveryHas: state.order.edit.delivery.has,
        assemblyHas: state.order.edit.assembly.has,
        model: state.order.edit
    }),
    dispatch => ({
        /**
         * Изменение состояния вкл/выкл доставка
         * @param {Boolean} has
         */
        changeDeliveryHas: has => dispatch({
            type: 'ORDER.EDIT.DELIVERY.HAS.CHANGE',
            has
        }),

        /**
         * Изменение состояния вкл/выкл доставка
         * @param {Boolean} has
         */
        changeAssemblyHas: has => dispatch({
            type: 'ORDER.EDIT.ASSEMBLY.HAS.CHANGE',
            has
        })
    })
)(Edit);
