import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';
import {
    Brightness1,
    Print,
    Home
} from '@material-ui/icons';
import {Typography} from '@material-ui/core';
import {ReactComponent as Mask} from '../../../asserts/icons/mask.svg';
import {ReactComponent as Ventilator} from '../../../asserts/icons/ventilator.svg';

const styles = () => ({
    widget: {
        width: '200px',
        height: 'fit-content',
        background: '#fff',
        boxShadow: '0 3px 20px 0px #aaa',
        borderRadius: '4px',
        padding: '16px',
        zIndex: 1
    },
    element: {
        display: 'flex',
        margin: '8px',
        color: '#666666',
        '& * + *': {
            marginLeft: '8px'
        }
    },
    colorGreen: {
        color: 'green'
    },
    colorBlue: {
        color: 'blue'
    },
    colorOrange: {
        color: 'orange'
    },
    colorRed: {
        color: 'red'
    }
});

const renderElement = ({classes, icon, label}) => (
    <div className={classes.element}>
        {icon}
        <Typography>{label}</Typography>
    </div>
);

renderElement.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
};

const elements = classes => [
    {
        icon: <Mask style={{fill: '#7e7996'}}/>,
        label: 'Masques'
    },
    {
        icon: <Ventilator style={{fill: '#7e7996'}}/>,
        label: 'Ventilateurs'
    },
    {
        icon: <Print style={{fill: '#7e7996'}}/>,
        label: 'Imprimantes 3D'
    },
    {
        icon: <Home style={{fill: '#7e7996'}}/>,
        label: 'Centres d\'isolation'
    },
    {
        icon: <Brightness1 classes={{root: classes.colorBlue}}/>,
        label: 'Information'
    },
    {
        icon: <Brightness1 classes={{root: classes.colorGreen}}/>,
        label: 'Disponibles'
    },
    {
        icon: <Brightness1 classes={{root: classes.colorOrange}}/>,
        label: 'En production'
    },
    {
        icon: <Brightness1 classes={{root: classes.colorRed}}/>,
        label: 'Les demandes'
    }
];

const WidgetCmp = ({classes}) => (
    <div className={classes.widget}>
        {elements(classes).map((element, key) => (
            <div key={key} className={classes.element}>
                {renderElement({...element, classes})}
            </div>
        ))}
    </div>
);

WidgetCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Widget = withStyles(styles)(WidgetCmp);
