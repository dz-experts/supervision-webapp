import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';
import {
    Home,
    Print
} from '@material-ui/icons';
import {ReactComponent as Mask} from '../../../asserts/icons/mask.svg';
import {ReactComponent as Ventilator} from '../../../asserts/icons/ventilator.svg';

const styles = () => ({
    hover: {
        position: 'relative',
        bottom: '45px'
    }
});

const style = {
    padding: '2px',
    background: '#fff',
    'box-shadow': '0 3px 8px 0px #aaa',
    'border-radius': '50%'
};

const MarkerCmp = ({classes, entry}) => {
    const [hover, setHover] = useState(false);
    let color = '';
    let icon = '';
    let e;

    const toggleHover = () => {
        setHover(!hover);
    };

    if (entry.type.id === 1) {
        color = 'blue';
    }

    if (entry.type.id === 2) {
        color = 'green';
    }

    if (entry.type.id === 3) {
        color = 'orange';
    }

    if (entry.type.id === 4) {
        color = 'red';
    }

    if (entry.resource.id === 1) {
        icon = 'Print';
    }

    if (entry.resource.id === 2) {
        icon = 'Mask';
    }

    if (entry.resource.id === 3) {
        icon = 'Home';
    }

    if (entry.resource.id === 4) {
        icon = 'Ventilator';
    }

    if (icon === 'Print') {
        e = <Print fontSize={'large'} style={{fill: color, ...style}}/>;
    }

    if (icon === 'Mask') {
        e = <Mask style={{fill: color, width: '35px', height: '35px', ...style}}/>;
    }

    if (icon === 'Home') {
        e = <Home fontSize={'large'} style={{fill: color, ...style}}/>;
    }

    if (icon === 'Ventilator') {
        e = <Ventilator style={{fill: color, width: '35px', height: '35px', ...style}}/>;
    }

    return (
        <div className={hover ? classes.hover : ''} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            {hover &&
            <div
                style={{
                    right: '60px',
                    width: '125px',
                    height: 'fit-content',
                    display: 'flex',
                    background: '#fff',
                    position: 'relative',
                    zIndex: '100',
                    flexDirection: 'column',
                    bottom: '2px',
                    padding: '12px 16px 16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(60,64,67,.28)'
                }}
            >
                <span>Name: {entry.full_name}</span>
                <span>Mobile: {entry.phone}</span>
                <span>Comment: {entry.comment}</span>
                <span>Quantity: {entry.quantity}</span>
            </div>}

            {e}
        </div>
    );
};

MarkerCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    entry: PropTypes.object.isRequired
};

export const Marker = withStyles(styles)(MarkerCmp);
