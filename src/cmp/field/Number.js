import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

/**
 * Текстовое поле
 */
class FieldNumber extends Component {


    /**
     * Обработчик изменения значения в поле
     * @param e
     * @param val
     */
    onChange = (e, val) => {

    };


    render() {
        return <TextField
            hintText='Hint Text'
            errorText='This field is required'
            onChange={this.change}
        />
    }
}


export default FieldNumber;
