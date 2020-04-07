import api from '../../../Api';

export const retrieveEntries = async token => {
    const response = await api.get('api/resources/entries/', {
        headers: {
            Authorization: `Token ${token}`
        }
    });

    if (response.status === 200) {
        return response.data;
    }

    return [];
};
