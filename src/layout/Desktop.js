import React, { Component } from 'react';
import SideTop from './SideTop.js';
import Menu from './Menu.js';
import Content from './Content.js';
import './desktop.css';
import '../css/indent.css';

class Desktop extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <SideTop/>
                <Content/>
            </div>
        )
    }
}

export default Desktop;
