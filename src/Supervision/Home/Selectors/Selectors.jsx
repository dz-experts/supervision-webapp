import React from 'react';
import PropTypes from 'prop-types';
import {Selector} from '../../Components';

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

const Selectors = () => {
    return (
        selectors.map(selector => <Selector key={selector.id} {...selector}/>)
    );
};

Selectors.propTypes = {
    classes: PropTypes.object.isRequired
};

export {Selectors};
