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
import './work-list.css';

class OrderingList extends Component {

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


    getTableRows(li) {
        return li.map(product => {
            return (
                <TableRow key={product.id}>
                    <TableRowColumn style={this.styleColNum}></TableRowColumn>
                    <TableRowColumn style={this.styleColName}>{product.name}</TableRowColumn>
                    <TableRowColumn style={this.styleColQt}>1</TableRowColumn>
                    <TableRowColumn style={this.styleColCost}>{product.cost}</TableRowColumn>
                </TableRow>
            )
        })
    }

    render() {
        const productLi = mappingProduct(this.props.price, this.props.ordering);
        const itemsTableRows = this.getTableRows(productLi);

        console.log('render', productLi);


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

                {itemsTableRows.length &&
                < TableBody displayRowCheckbox={false}>
                    {itemsTableRows}
                </TableBody>
                }
            </Table>
        )
    }
}


export default connect(
    state => ({
        ordering: state.order.edit.ordering,
        price: state.price
    }),
    dispatch => ({

    })
)(OrderingList);


    
/**
 * todo временное решение
 *
 * @param price
 * @param ordering
 */
function mappingProduct (price, ordering) {
    return ordering.map(id => {
        const priceItem = findPriceItem(id, price);
        return {
            id,
            name: priceItem.name,
            cost: priceItem.cost,
            unit: priceItem.unit,
            type: priceItem.type,
            section: priceItem.section,
        }
    })

}

/**
 * todo временное решение.
 * поиск элемента прайса по id
 * @param id
 * @param price
 */
function findPriceItem(id, price) {
    return price.filter(item => item.id === id)[0];
}
