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
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

/**
 * Показывает список выбранных товаров/услуг
 * @param {ModelOrderItem[]} props.itemLi
 * @param {Function} props.changeQty обработчик изменения кол-ва
 * 
 *
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
     * @param {ModelOrderItem} item
     */
    createRow = (item, index) => {
        const product = this.props.productHash[item.productId];
        const unit = this.props.unitHash[product.unitId];

        // todo добавить css счетчик
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
            </TableRow>
        )
    };

    render() {
        return (
            <div>
            <Table onCellClick={this.onCellClick}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn
                            style={this.styleColNum}
                        >№</TableHeaderColumn>

                        <TableHeaderColumn style={this.styleColName}>Наименование</TableHeaderColumn>
                        <TableHeaderColumn style={this.styleColUnit}>Ед.изм.</TableHeaderColumn>
                        <TableHeaderColumn style={this.styleColQty}>Кол-во</TableHeaderColumn>
                        <TableHeaderColumn style={this.styleColCost}>Цена</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                {this.props.itemLi.length &&
                <TableBody displayRowCheckbox={false}>
                    {this.props.itemLi.map(this.createRow)}
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
                    <Menu>
                        <MenuItem primaryText="1"/>
                        <MenuItem primaryText="2"/>
                        <MenuItem primaryText="3"/>
                        <MenuItem primaryText="Sign out"/>
                    </Menu>
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

