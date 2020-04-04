import api from '../../../Api';

export const saveData = (data, token) => {
    const {type, resource, fullName, phone, wilaya, commune, comment} = data;

    return api.post('api/resources/entries/',
        {
            type: type,
            resource: resource,
            full_name: fullName, // eslint-disable-line
            phone: phone,
            wilaya: wilaya,
            commune: commune,
            comment: comment
        },
        {
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json'
            }
        }
    );
};
