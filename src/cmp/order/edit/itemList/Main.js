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
import {format as moneyFormat, calcPercent as moneyCalcPercent} from '../../../../helper/money';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import ListInteger from '../../../select/ListInteger';
import {
    transformToRub as moneyTransformToRub,
    transformToKop as moneyTransformToKop
} from '../../../../helper/money';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {addItemEmpty as actionAddItemEmpty} from '../../../../actions/order/edit';
import {col as styleCol} from './_style';
import ModelOrderItemFactory from '../../../../model/order/item/factory';


/**
 * Показывает список выбранных товаров/услуг
 * @param {ModelOrderBase[]} props.itemLi позиции заказа
 * @param {String} section раздел, список которого выводится
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
             * Данные для редактирования "продукта"
             */
            editProductOpen: false,
            editProductAnchorEl: null,
            editProductValue: null,
            editProductHandler: null,

        }
    }

    /**
     * inline style
     * @type {{col}}
     */
    style = {
        col: styleCol
    };

    /**
     * Данные для строки итога
     * @type {{sum: number, qty: number}}
     */
    total = {
        sum: 0,
        qty: 0,
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
        const classModelName = ModelOrderItemFactory.getInstanceClass(this.itemSelected);

        // общие поля для классов
        // product.name
        if (colKey === 1) {
            // проверить условия, что бы дать возможность выбрать продукт из списка

            if (classModelName === 'ModelOrderItemBase') {
                console.log('asdfsdfsdf1111');

                return;
            }
        }

        if (classModelName === 'ModelOrderItemBase') {
            // не предусмотренно других действий, сначала нужно определиться с типом записи
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

        // далее, зависит от класса экземпляра
        // thingCost. актуально для зависимой позиции
        if (colKey === 4 && classModelName === 'ModelOrderItemDepend') {
            this.setState({
                editOpen: true,
                editOptionLi: [],
                editAnchorEl: event.currentTarget,
                editValue: moneyTransformToRub(this.itemSelected.thingCost),
                editHandler: this.changeThingCost,
                field: {
                    min: 1
                }
            });
        }

        // cost
        if (colKey === 5 && classModelName === 'ModelOrderItemIndepend') {
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
     * Обработчик закрытия Popover
     */
    handleRequestCloseEditName = () => {

        this.itemSelected = null;
        this.setState({
            editProductOpen: false,
        });
    };



    /**
     * Изменяет выбранный "продукт"
     * @param {Model} value выбранное значение
     */
    changeProduct = (value) => {

        console.log('changeProduct');


        // this.props.changeQty(this.itemSelected.id, value);
        // this.setState({
        //     editOpen: false
        // });
    };

    /**
     * Изменяет кол-во "продукта"
     * @param {Number} value выбранное значение
     */
    changeQty = (value) => {
        this.props.changeQty(this.itemSelected.id, value);
        this.setState({
            editOpen: false
        });
    };

    /**
     * Изменяет стоимость "продукта"
     * @param {Number} value новая стоимость
     */
    changeCost = (value) => {
        this.props.changeCost(this.itemSelected.id, moneyTransformToKop(value));
        this.setState({
            editOpen: false
        });
    };

    /**
     * Изменяет стоимость вещей, от стоимости которых рассчитывается стоимость продукта
     * @param {Number} value новая стоимость
     */
    changeThingCost = (value) => {
        this.props.changeThingCost(this.itemSelected.id, moneyTransformToKop(value));
        this.setState({
            editOpen: false
        });
    };




    /**
     * Добавить пустую позицию в заказ (без указания "продукта")
     */
    addItemEmpty = () => {
        this.props.addItemEmpty(this.props.section);
    };

    /**
     * Оглавление
     */
    rowHeader = () => {
        return (<TableRow>
            <TableHeaderColumn style={this.style.col.num}>№</TableHeaderColumn>
            <TableHeaderColumn style={this.style.col.name}>Наименование</TableHeaderColumn>
            {this.state.colSet.visibleSet.unit &&
            <TableHeaderColumn style={this.style.col.unit}>Ед.изм.</TableHeaderColumn>}
            <TableHeaderColumn style={this.style.col.qty}>Кол-во</TableHeaderColumn>
            <TableHeaderColumn style={this.style.col.thingCost}>Цена<br/>мебели</TableHeaderColumn>
            <TableHeaderColumn style={this.style.col.cost}>Цена</TableHeaderColumn>
            <TableHeaderColumn style={this.style.col.discount}>Скидка</TableHeaderColumn>
            <TableHeaderColumn style={this.style.col.total}>Всего</TableHeaderColumn>
        </TableRow>);
    };

    /**
     * Одна строка в таблице
     * @param {ModelOrderItemBase|ModelOrderItemDepend|ModelOrderItemIndepend} item
     */
    row = (item, index) => {
        switch (ModelOrderItemFactory.getInstanceClass(item)) {
            case 'ModelOrderItemBase':
                return this.rowBase(item, index);

            case 'ModelOrderItemDepend':
                return this.rowDepend(item, index);

            case 'ModelOrderItemIndepend':
                return this.rowIndepend(item, index);

            default: console.warn('не определен класс строки', item);
        }
    };

    /**
     * Одна строка в таблице
     * @param {ModelOrderItemBase} item
     * todo заменить index на css счетчик номеров строк
     */
    rowBase = (item, index) => {
        return (
            <TableRow key={item.id}>
                <TableRowColumn
                    style={this.style.col.num}
                    className="order-edit-item-list-main-row-counter"
                >{index + 1}</TableRowColumn>
                <TableRowColumn style={this.style.col.name}>Выберите ...</TableRowColumn>
                <TableRowColumn style={this.style.col.qty}> </TableRowColumn>
                <TableRowColumn style={this.style.col.thingCost}> </TableRowColumn>
                <TableRowColumn style={this.style.col.cost}> </TableRowColumn>
                <TableRowColumn style={this.style.col.discount}>  </TableRowColumn>
                <TableRowColumn style={this.style.col.total}> </TableRowColumn>
            </TableRow>
        )
    };

    /**
     * Одна строка в таблице
     * @param {ModelOrderItemDepend} item
     * todo заменить index на css счетчик номеров строк
     */
    rowDepend = (item, index) => {
        const product = this.props.productHash[item.productId];
        const unit = this.props.unitHash[product.unitId];
        const cost = moneyCalcPercent(item.thingCost, item.costPercent);

        this.total.sum += cost * item.qty;
        this.total.qty += item.qty;

        return (
            <TableRow key={item.id}>
                <TableRowColumn
                    style={this.style.col.num}
                    className="order-edit-item-list-main-row-counter"
                >{index + 1}</TableRowColumn>

                <TableRowColumn style={this.style.col.name}>{product.nameS}</TableRowColumn>
                {this.state.colSet.visibleSet.unit && <TableRowColumn style={this.style.col.unit}>{unit.nameS}</TableRowColumn>}
                <TableRowColumn style={this.style.col.qty}>{item.qty}</TableRowColumn>
                <TableRowColumn style={this.style.col.thingCost}>{moneyFormat(item.thingCost) || ''}</TableRowColumn>
                <TableRowColumn style={this.style.col.cost}>{moneyFormat(cost)}</TableRowColumn>
                <TableRowColumn style={this.style.col.discount}>{item.discount ? item.discount : ''}</TableRowColumn>
                <TableRowColumn style={this.style.col.total}>{moneyFormat(cost * item.qty)}</TableRowColumn>
            </TableRow>
        )
    };

    /**
     * Одна строка в таблице
     * @param {ModelOrderItemIndepend} item
     * todo заменить index на css счетчик номеров строк
     */
    rowIndepend = (item, index) => {
        const product = this.props.productHash[item.productId];
        const unit = this.props.unitHash[product.unitId];

        this.total.sum += item.cost * item.qty;
        this.total.qty += item.qty;

        return (
            <TableRow key={item.id}>
                <TableRowColumn
                    style={this.style.col.num}
                    className="order-edit-item-list-main-row-counter"
                >{index + 1}</TableRowColumn>
                <TableRowColumn style={this.style.col.name}>{product.nameS}</TableRowColumn>
                {this.state.colSet.visibleSet.unit && <TableRowColumn style={this.style.col.unit}>{unit.nameS}</TableRowColumn>}
                <TableRowColumn style={this.style.col.qty}>{item.qty}</TableRowColumn>
                <TableRowColumn style={this.style.col.thingCost}> </TableRowColumn>
                <TableRowColumn style={this.style.col.cost}>{moneyFormat(item.cost)}</TableRowColumn>
                <TableRowColumn style={this.style.col.discount}>{item.discount ? item.discount : ''}</TableRowColumn>
                <TableRowColumn style={this.style.col.total}>{moneyFormat(item.cost * item.qty)}</TableRowColumn>
            </TableRow>
        )
    };





    /**
     * Итоговая строка
     */
    rowTotal = ({sum, qty}) => {
        return (
            <TableRow key={'total'}>
                <TableRowColumn style={this.style.col.num}> </TableRowColumn>
                <TableRowColumn style={this.style.col.name}>Итого</TableRowColumn>
                {this.state.colSet.visibleSet.unit && <TableRowColumn style={this.style.col.unit}> </TableRowColumn>}
                <TableRowColumn style={this.style.col.qty}>{qty}</TableRowColumn>
                <TableRowColumn style={this.style.col.thingCost}> </TableRowColumn>
                <TableRowColumn style={this.style.col.cost}> </TableRowColumn>
                <TableRowColumn style={this.style.col.discount}> </TableRowColumn>
                <TableRowColumn style={this.style.col.total}>{moneyFormat(sum)}</TableRowColumn>
            </TableRow>
        )
    };

    render() {
        this.total.sum = 0;
        this.total.qty = 0;
        return (
            <div className={this.props.className}>
                <Table onCellClick={this.onCellClick}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>{this.rowHeader()}</TableHeader>

                    {this.props.itemLi.length && <TableBody displayRowCheckbox={false}>
                         {this.props.itemLi.map(this.row, this)}
                        {this.rowTotal(this.total)}
                     </TableBody>}
                </Table>

                <FloatingActionButton mini={true} style={{}} onTouchTap={this.addItemEmpty}>
                    <ContentAdd />
                </FloatingActionButton>


                {/* изменение выбранного "продукта" */}
                <Popover
                    open={this.state.editProductOpen}
                    anchorEl={this.state.editProductAnchorEl}
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'bottom'
                    }}
                    targetOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                    onRequestClose={this.handleRequestCloseEditName}
                    animation={PopoverAnimationVertical}
                >
                    askfsdfsdfasd fsadjfhasf
                </Popover>


                {/* изменение значений - кол-во, цена, сумма */}
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
        /**
         * @param {Number} id
         * @param {Number} thingCost
         */
        changeThingCost: (id, thingCost) => dispatch({
            type: 'ORDER.EDIT.ITEM.THING_COST.CHANGE',
            id,
            thingCost,
        }),

        /**
         * Добавляет пустую позицию в заказ
         * @param {String} section название раздела
         */
        addItemEmpty: (section) => dispatch(actionAddItemEmpty(section))
    })
)(Main);

