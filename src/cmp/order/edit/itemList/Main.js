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
import Popover from 'material-ui/Popover';
import ListValueSingle from '../../../choice/ListValueSingle';

/**
 * Показывает список выбранных товаров/услуг
 * @param {ModelOrderBase[]} props.itemLi
 * @param {Function} props.changeQty обработчик изменения кол-ва
 */
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qtyOpen: false,
            qtyAnchorEl: null
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
        this.itemSelected = this.props.itemLi[rowKey];

        if (colKey !== 4) return;

        this.setState({
            qtyOpen: true,
            qtyAnchorEl: event.currentTarget
        })

    };


    handleRequestClose = () => {
        this.itemSelected = null;
      this.setState({
          qtyOpen: false,
      });
    };


    editQty = () => {
        this.props.changeQty()
    };


    /**
     * Одна строка в таблице
     * @param {ModelOrderBase} item
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
                <TableRowColumn style={this.styleColUnit}>{unit.nameS}</TableRowColumn>

                <TableRowColumn style={this.styleColQty}>
                    {item.qty}
                </TableRowColumn>

                <TableRowColumn style={this.styleColCost}>
                    {moneyFormat('', product.cost)}
                </TableRowColumn>

                <TableRowColumn style={this.styleColTotal}>
                    {moneyFormat('', product.cost * item.qty)}
                </TableRowColumn>
            </TableRow>
        )
    };

    /**
     * Итоговая строка
     *
     */
    createRowTotal = (itemLi) => {

        const {qty, total} = itemLi.reduce((result, item) => {
            result.qty += item.qty;
            result.total += item.cost * item.qty;

            return result;
        }, { qty: 0, total: 0});

             return (
                 <TableRow key={'total'}>

                     <TableRowColumn style={this.styleColNum}> </TableRowColumn>
                     <TableRowColumn style={this.styleColName}>Итого</TableRowColumn>
                     <TableRowColumn style={this.styleColUnit}> </TableRowColumn>
                     <TableRowColumn style={this.styleColQty}>
                         {qty}
                     </TableRowColumn>

                     <TableRowColumn style={this.styleColCost}> </TableRowColumn>

                     <TableRowColumn style={this.styleColTotal}>
                         {moneyFormat('', total)}
                     </TableRowColumn>
                 </TableRow>
             )
    };

    render() {
        return (
            <div>
                <Table onCellClick={this.onCellClick}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={this.styleColNum}>№</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColName}>Наименование</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColUnit}>Ед.изм.</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColQty}>Кол-во</TableHeaderColumn>
                            <TableHeaderColumn style={this.styleColCost}>Цена</TableHeaderColumn>
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

                <Popover
                    open={this.state.qtyOpen}
                    anchorEl={this.state.qtyAnchorEl}
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'bottom'
                    }}
                    targetOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                    onRequestClose={this.handleRequestClose}
                >
                    <ListValueSingle
                        valueLi={[1, 2, 3]}
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
    })
)(Main);

