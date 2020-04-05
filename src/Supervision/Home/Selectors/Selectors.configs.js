import {
    getResourceField,
    getWilayaField,
    getCommunesField
} from '../Home.configs';

const retrieveSelectors = async token => [
    await getResourceField(token),
    await getWilayaField(),
    await getCommunesField()
];

export {retrieveSelectors};
