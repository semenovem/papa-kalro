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

/**
 * Показывает список выбранных товаров/услуг
 * @param {ModelOrderItem[]} props.itemLi
 *
 *
 */
class Main extends Component {

    styleColNum = {
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '10px',
    };
    styleColName = {
        paddingLeft: '5px',
        paddingRight: '5px',
    };
    styleColQt = {
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
     * Одна строка в таблице
     * @param {ModelOrderItem} item
     */
    createRow = (item) => {
        const product = this.props.productHash[item.productId];
        return (
            <TableRow key={item.id}>
                <TableRowColumn style={this.styleColNum}></TableRowColumn>
                <TableRowColumn style={this.styleColName}>{product.name}</TableRowColumn>
                <TableRowColumn style={this.styleColQt}>1</TableRowColumn>
                <TableRowColumn style={this.styleColCost}>{product.cost}</TableRowColumn>
            </TableRow>
        )
    };

    /**
     * Создает строки таблицы
     * @param {ModelOrderItem[]} itemLi
     * @returns {Array}
     */
    createRowLi(itemLi) {
        return itemLi.map(this.createRow);
    }

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn
                            style={this.styleColNum}
                        >№</TableHeaderColumn>

                        <TableHeaderColumn style={this.styleColName}>Наименование</TableHeaderColumn>
                        <TableHeaderColumn style={this.styleColQt}>Кол-во</TableHeaderColumn>
                        <TableHeaderColumn style={this.styleColCost}>Цена</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                {this.props.itemLi.length &&
                <TableBody displayRowCheckbox={false}>
                    {this.createRowLi(this.props.itemLi)}
                </TableBody>
                }
            </Table>
        )
    }
}

export default connect(
    state => ({
        productHash: state.product.hash,
    })
)(Main);
