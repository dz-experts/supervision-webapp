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
        minWidth: '150px',
        marginRight: '16px'
    }
});

const SelectorCmp = ({classes, id, name, label, value, handleChange, items, ...props}) => (
    <FormControl variant="outlined" classes={{root: classes.selectorItem}}>
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <Select
            labelId={`${id}-select-label`}
            id={`${id}-select`}
            name={name}
            value={value}
            onChange={handleChange}
            {...props}
        >
            {
                items.map(item => (
                    <MenuItem key={item.id} value={item.value}>{item.displayValue}</MenuItem>
                ))
            }
        </Select>
    </FormControl>
);

SelectorCmp.defaultProps = {
    name: ''
};

SelectorCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
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

export const Selector = withStyles(styles)(SelectorCmp);
