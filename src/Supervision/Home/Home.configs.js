import {retrieveData} from './Home.request';

const getTypeField = async token => ({
    component: 'selector',
    name: 'type',
    label: 'Type',
    type: 'text',
    options: await retrieveData('types', 'resources', token),
    disabled: false
});

const getResourceField = async token => ({
    component: 'selector',
    name: 'resource',
    label: 'Resource',
    type: 'text',
    options: await retrieveData('resources', 'resources', token),
    disabled: false
});

const getWilayaField = async () => ({
    component: 'selector',
    name: 'wilaya',
    label: 'Wilaya',
    type: 'text',
    options: await retrieveData('wilayas', 'public'),
    disabled: false
});

const getCommunesField = async () => ({
    component: 'selector',
    name: 'commune',
    label: 'Commune',
    type: 'text',
    options: await retrieveData('communes', 'public'),
    disabled: false
});

const getLeftFields = ({wilayas, resources}) => ([
    wilayas,
    resources,
    {
        component: 'input',
        name: 'fullName',
        label: 'Nom',
        type: 'text',
        disabled: false
    }
]);

const getRightFields = ({communes}) => ([
    communes,
    {
        component: 'input',
        name: 'quantity',
        label: 'Quantity',
        type: 'number',
        disabled: false
    },
    {
        component: 'input',
        name: 'phone',
        label: 'Phone',
        type: 'text',
        disabled: false
    }
]);

const commentsField = {
    component: 'textArea',
    name: 'comment',
    label: 'Comment',
    disabled: false
};

export {
    getTypeField,
    getResourceField,
    getWilayaField,
    getCommunesField,
    getLeftFields,
    getRightFields,
    commentsField
};
