import React from 'react';
import PropTypes from 'prop-types';
import {useSupervisionContext} from '../../Supervision.context';
import {Form, Formik} from 'formik';
import {RenderField} from '../Form/RenderField';
import {withStyles} from '@material-ui/core';

const styles = () => ({
    form: {
        display: 'flex'
    },
    selectorItem: {
        background: '#fff',
        borderRadius: '4px'
    }
});

const SelectorsCmp = ({classes}) => {
    const {data: {wilayas, communes}, setMapsConfigs} = useSupervisionContext();
    const selectors = [wilayas, communes];
    const initialValues = {
        wilaya: '',
        commune: ''
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                if (values.commune) {
                    const {latitude, longitude} = communes.options.find(commune => commune.id === values.commune);

                    setMapsConfigs({
                        center: {
                            lat: latitude,
                            lng: longitude
                        },
                        zoom: 13
                    });
                    window.handleEventUpdateZoom = true;
                }
            }}
        >
            {() => {
                return (
                    <Form className={classes.form}>
                        {selectors.map(selector => (
                            <RenderField
                                classes={{selectorItem: classes.selectorItem}}
                                key={selector.id}
                                {...selector}
                            />
                        ))}
                    </Form>
                );
            }}
        </Formik>
    );
};

SelectorsCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Selectors = withStyles(styles)(SelectorsCmp);
