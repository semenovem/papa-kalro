import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {format as moneyFormat} from '../../../../helper/money';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import ListInteger from '../../../select/ListInteger';
import {
    transformToRub as moneyTransformToRub,
    transformToKop as moneyTransformToKop
} from '../../../../helper/money';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * Показывает список выбранных товаров/услуг
 * @param {ModelOrderBase[]} props.itemLi
 */
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /**
             * Настройки полей
             */
            colSet: {
                /**
                 * Видимость
                 */
                visibleSet: {
                    unit: false
                }
            },

            /**
             * Данные для popOver редактирования
             */
            editOpen: false,
            editAnchorEl: null,
            editValue: null,
            editOptionLi: null,
            editHandler: null,
            editField: null,

            /**
             * Показать пустые строки, в которых можно выбрать item.
             */
            rowEmptyLi: []
        }
    }
    styleColNum = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '10px',
    };
    styleColName = {
        paddingLeft: '5px',
        paddingRight: '5px',
    };
    styleColUnit = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '50px',
        textAlign: 'center'
    };
    styleColQty = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '50px',
        textAlign: 'center'
    };
    styleColCost = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '50px',
        textAlign: 'right'
    };
    styleColDiscount = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '50px',
        textAlign: 'right'
    };
    styleColTotal = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '80px',
        textAlign: 'right'
    };

    /**
     * Обработчик клика по таблице
     * @param rowKey
     * @param colKey
     * @param event
     */
    onCellClick = (rowKey, colKey, event) => {
        if (!(this.itemSelected = this.props.itemLi[rowKey])) {
            return;
        }

        // qty
        if (colKey === 3) {
            this.setState({
                editOpen: true,
                editOptionLi: [1, 2, 3],
                editAnchorEl: event.currentTarget,
                editValue: this.itemSelected.qty,
                editHandler: this.changeQty,
                field: {
                    min: 1
                }
            });
        }

        // cost
        if (colKey === 4) {
            this.setState({
                editOpen: true,
                editOptionLi: [],
                editAnchorEl: event.currentTarget,
                editValue: moneyTransformToRub(this.itemSelected.cost),
                editHandler: this.changeCost,
                field: {
                    min: 1,
                    // todo для копеек нужно сделать дробное число
                }
            });
        }
    };

    /**
     * Обработчик закрытия Popover
     */
    handleRequestClose = () => {
        this.itemSelected = null;
        this.setState({
            editOpen: false,
        });
    };

    /**
     * Изменяет кол-во товара/услуги
     * @param {Number} value выбранное значение
     */
    changeQty = (value) => {
        this.props.changeQty(this.itemSelected.id, value);
        this.setState({
            editOpen: false
        });
    };

    /**
     * Изменяет стоимость товара/услуги
     * @param {Number} value новая стоимость
     */
    changeCost = (value) => {
        this.props.changeCost(this.itemSelected.id, moneyTransformToKop(value));
        this.setState({
            editOpen: false
        });
    };

    /**
     * Добавить строку в таблицу
     */
    addItem = () => {
        console.log ('23434');


    };

    /**
     * Одна строка в таблице
     * @param {ModelOrderItemBase} item
     * todo заменить index на css счетчик номеров строк
     */
    createRow = (item, index) => {
        const product = this.props.productHash[item.productId];
        const unit = this.props.unitHash[product.unitId];

        return (
            <TableRow key={item.id}>

                <TableRowColumn
                    style={this.styleColNum}
                    className="order-edit-item-list-main-row-counter"
                >{index + 1}</TableRowColumn>

                <TableRowColumn style={this.styleColName}>{product.nameS}</TableRowColumn>
                {this.state.colSet.visibleSet.unit && <TableRowColumn style={this.styleColUnit}>{unit.nameS}</TableRowColumn>}

                <TableRowColumn style={this.styleColQty}>
                    {item.qty}
                </TableRowColumn>

                <TableRowColumn style={this.styleColCost}>
                    {moneyFormat(item.cost)}
                </TableRowColumn>

                <TableRowColumn style={this.styleColDiscount}>
                    {item.discount ? item.discount : ''}
                </TableRowColumn>

                <TableRowColumn style={this.styleColTotal}>
                    {moneyFormat(item.cost * item.qty)}
                </TableRowColumn>
            </TableRow>
        )
    };

    /**
     * Итоговая строка
     */
    createRowTotal = (itemLi) => {
        const {qty, total} = itemLi.reduce((result, item) => {
            result.qty += item.qty;
            result.total += item.cost * item.qty;
            return result;
        }, {qty: 0, total: 0});

        return (
            <TableRow key={'total'}>

                <TableRowColumn style={this.styleColNum}> </TableRowColumn>
                <TableRowColumn style={this.styleColName}>Итого</TableRowColumn>
                {this.state.colSet.visibleSet.unit && <TableRowColumn style={this.styleColUnit}> </TableRowColumn>}
                <TableRowColumn style={this.styleColQty}>
                    {qty}
                </TableRowColumn>

                <TableRowColumn style={this.styleColCost}> </TableRowColumn>
                <TableRowColumn style={this.styleColDiscount}> </TableRowColumn>

                <TableRowColumn style={this.styleColTotal}>
                    {moneyFormat(total)}
                </TableRowColumn>
            </TableRow>
        )
    };


    rowEmpty = () => {
        return
    };



    render() {
        return (
            <div className={this.props.className}>
                <Table onCellClick={this.onCellClick}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={this.styleColNum}>№</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColName}>Наименование</TableHeaderColumn>
                            {this.state.colSet.visibleSet.unit && <TableHeaderColumn style={this.styleColUnit}>Ед.изм.</TableHeaderColumn>}
                            <TableHeaderColumn style={this.styleColQty}>Кол-во</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColCost}>Цена</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColDiscount}>Скидка</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColTotal}>Всего</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    {this.props.itemLi.length &&
                    <TableBody displayRowCheckbox={false}>
                        {this.props.itemLi.map(this.createRow)}
                        {this.props.itemLi.length && this.createRowTotal(this.props.itemLi)}
                    </TableBody>
                    }
                </Table>

                <FloatingActionButton mini={true} style={{}} onTouchTap={this.addItem}>
                    <ContentAdd />
                </FloatingActionButton>


                <Popover
                    open={this.state.editOpen}
                    anchorEl={this.state.editAnchorEl}
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'bottom'
                    }}
                    targetOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <ListInteger
                        optionLi={this.state.editOptionLi}
                        value={this.state.editValue}
                        field={this.state.field}
                        change={this.state.editHandler}
                    />
                </Popover>
            </div>
        )
    }
}

export default connect(
    state => ({
        productHash: state.product.hash,
        unitHash: state.unit.hash
    }),
    dispatch => ({
        /**
         * @param {Number} id
         * @param {Number} qty
         */
        changeQty: (id, qty) => dispatch({
            type: 'ORDER.EDIT.ITEM.QTY.CHANGE',
            id,
            qty,
        }),
        /**
         * @param {Number} id
         * @param {Number} cost
         */
        changeCost: (id, cost) => dispatch({
            type: 'ORDER.EDIT.ITEM.COST.CHANGE',
            id,
            cost,
        }),
    })
)(Main);

