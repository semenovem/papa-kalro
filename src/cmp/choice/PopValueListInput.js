import React, {Component} from 'react';
import Popover from 'material-ui/Popover';

/**
 * выбор значения из списка + текстовое поле
 * @param {} open состояние открыт/закрыт
 * @param {} anchorEl элемент, относительно которого показать popup
 * @param {} [anchorOrigin]
 * @param {} [targetOrigin]
 *
 * @param {Function} choice(value[]) массив выбранных значений
 *
 *
 *
 */
class PopValueListInput extends Component {

    /**
     *
     */
    handleRequestClose = () => {};

    render() {
        return ( <Popover
            open={this.state.open}
            anchorEl={this.state.qtyAnchorEl}
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom'
            }}
            targetOrigin={{
                horizontal: 'left',
                vertical: 'top'
            }}
            onRequestClose={this.onClose}
        />
        )
    }
}

export default PopValueListInput;
