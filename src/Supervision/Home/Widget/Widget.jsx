import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';

const styles = () => ({
    widget: {
        width: '200px',
        height: '200px',
        background: '#fff',
        boxShadow: '0 3px 20px 0px #aaa',
        borderRadius: '4px',
        padding: '16px'
    }
});

const WidgetCmp = ({classes}) => {
    return (
        <div className={classes.widget}>Information</div>
    );
};

WidgetCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Widget = withStyles(styles)(WidgetCmp);
