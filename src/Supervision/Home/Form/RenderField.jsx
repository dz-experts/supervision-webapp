import React from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    withStyles
} from '@material-ui/core';
import {Field} from 'formik';
import {Selector} from '../../Components';

const styles = () => ({
    selectorItem: {
        display: 'flex',
        minWidth: '200px',
        margin: '16px 0 8px 0'
    },
    textArea: {
        resize: 'none',
        width: '500px',
        marginTop: '16px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        padding: '18.5px 14px',
        border: '1.2px solid #0000003b',
        borderRadius: '4px',
        outline: 'none',
        '&:hover': {
            borderColor: '#000000'
        },
        '&:focus': {
            border: '1.5px solid #3f51b5'
        }
    }
});

const RenderFieldCmp = ({component, classes, options, name, label, type, disabled}) => {
    return (
        <Field className={classes.field} type={type} name={name}>
            {({form, field}) => {
                if (component === 'selector' && name === 'commune') {
                    options = options.filter(commune => commune.wilaya === form.values.wilaya);
                }

                const handleChange = e => {
                    form.setFieldValue('commune', '', true);
                    form.handleChange(e);
                };

                return (
                    <>
                        {component === 'selector' &&
                        <Selector
                            classes={{selectorItem: classes.selectorItem}}
                            id={name}
                            name={name}
                            label={label}
                            items={options}
                            disabled={disabled || options.length === 0}
                            value={form.values[name] || ''}
                            handleChange={name === 'wilaya' ? e => handleChange(e) : field.onChange}
                        />}

                        {component === 'input' &&
                        <TextField
                            fullWidth
                            name
                            type={type}
                            variant="outlined"
                            margin="normal"
                            label={label}
                            value={form.values[name]}
                            {...field}
                        />}

                        {component === 'textArea' &&
                        <textarea
                            name
                            className={classes.textArea}
                            placeholder={label}
                            rows={10}
                            value={form.values[name]}
                            {...field}
                        />}
                    </>
                );
            }}
        </Field>
    );
};

RenderFieldCmp.defaultProps = {
    options: [],
    type: 'text',
    disabled: false
};

RenderFieldCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    component: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array
};

export const RenderField = withStyles(styles)(RenderFieldCmp);
