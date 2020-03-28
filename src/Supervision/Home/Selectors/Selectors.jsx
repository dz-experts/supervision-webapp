import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Select,
    FormControl,
    InputLabel,
    MenuItem
} from '@material-ui/core';

const styles = () => ({
    selectorItem: {
        marginRight: '16px'
    }
});

const selectorRender = ({classes, id, label, value, handleChange, items}) => (
    <FormControl key={id} variant="outlined" classes={{root: classes.selectorItem}}>
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <Select
            labelId={`${id}-select-label`}
            id={`${id}-select`}
            value={value}
            onChange={handleChange}
        >
            {
                items.map(item => (
                    <MenuItem key={item.id} value={item.value}>{item.displayValue}</MenuItem>
                ))
            }
        </Select>
    </FormControl>
);

selectorRender.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            value: PropTypes.string,
            displayValue: PropTypes.string
        })
    ).isRequired
};

const selectors = [
    {
        id: '1',
        label: 'Wilaya',
        value: 'wilaya',
        handleChange: () => {
        },
        items: [
            {id: '11', value: 'wilaya', displayValue: 'Wilaya'}
        ]
    },
    {
        id: '2',
        label: 'Commune',
        value: 'commune',
        handleChange: () => {
        },
        items: [
            {id: '21', value: 'commune', displayValue: 'Commune'}
        ]
    },
    {
        id: '3',
        label: 'Ressource',
        value: 'ressource',
        handleChange: () => {
        },
        items: [
            {id: '31', value: 'ressource', displayValue: 'Ressource'}
        ]
    }
];

const SelectorsCmp = ({classes}) => {
    return (
        selectors.map(selector => (selectorRender({...selector, classes})))
    );
};

SelectorsCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Selectors = withStyles(styles)(SelectorsCmp);
