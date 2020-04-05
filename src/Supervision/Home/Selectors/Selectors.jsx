import React from 'react';
import PropTypes from 'prop-types';
import {useSupervisionContext} from '../../Supervision.context';
import {Form, Formik} from 'formik';
import {RenderField} from '../Form/RenderField';

const Selectors = () => {
    const {data: {wilayas, communes, resources}, setMapsConfigs} = useSupervisionContext();
    const selectors = [wilayas, communes, resources];
    const initialValues = {
        wilaya: '',
        commune: '',
        resource: ''
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
                        zoom: 8
                    });
                }
            }}
        >
            {() => {
                return (
                    <Form>
                        {selectors.map(selector => <RenderField key={selector.id} {...selector}/>)}
                    </Form>
                );
            }}
        </Formik>
    );
};

Selectors.propTypes = {
    classes: PropTypes.object.isRequired
};

export {Selectors};
