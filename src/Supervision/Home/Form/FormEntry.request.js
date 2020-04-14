import api from '../../../Api';

export const saveData = (data, token) => {
    const {type, resource, fullName, phone, wilaya, commune, comment, quantity} = data;

    return api.post('api/resources/entries/',
        {
            type: type,
            resource: resource,
            full_name: fullName, // eslint-disable-line
            phone: phone,
            wilaya: wilaya,
            commune: commune,
            comment: comment,
            quantity: quantity
        },
        {
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json'
            }
        }
    );
};
