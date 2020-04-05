import api from '../../Api';

export const retrieveData = async (type, location, token) => {
    const isPublicData = location === 'public';
    const url = `api/${location}/${type}/`;

    const response = await api.get(url, !isPublicData && {
        headers: {
            Authorization: `Token ${token}`
        }
    });

    if (response.status === 200) {
        return response.data;
    }

    return [];
};
