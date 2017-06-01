import React from 'react';
import { connect } from 'react-redux';

const Title = ({ title, className }) => {
    return <h3 className={className}>{title}</h3>
};

export default connect(
    state => ({
        title: state.menu.items.filter(item => item.id === state.menu.selectedId)[0].name
    })
)(Title);
