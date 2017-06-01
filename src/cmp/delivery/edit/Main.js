import React, {Component} from 'react';
//import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';

import ChoiceProduct from './ChoiceProduct';
import Work from './WorkList';
import './main.css';



class Edit extends Component {
    render() {
        return (
            <div>
                <ChoiceProduct/>
                <Work/>



                <TextField
                    floatingLabelText="Комментарий к доставке"
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}
                    //value={this.props.addr}
                    //onChange={this.onChange}
                />
                
            </div>
        )
    }
}

export default Edit;
