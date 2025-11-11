const user = {
    name: 'Sarah Kyle',
    surname: 'Connor',
    surname2: '',
    gender: 'female',
    birth_date: '1984-06-06',
    age: 35,
    country: 'ES',
    language: 'ca',
    locale: 'ca-ES',
    email: 'some@email.text',
    phone_prefix: '+34',
    phone: '123123123',
    id: '99dba950-95cc-11ea-a7b0-612ea3e108b3',
    time_zone: 'Europe/Amsterdam',
    document_id: 'A2015472WQP23',
    client_code: 'ZRRUJSKTYG24Y8',
    project_id: 11,
    group: '',
    is_owner: true,
    identity_verified: false,
    has_postal_data: false,
    has_emergency_contacts: false,
    has_gp_details: false,
    has_medical_data: false,
    use_gp_details: true,
    use_emergency_contacts: true,
    metadata: {
        customkey: 'customValue',
        customKey2: 'customValue2',
    },
    consents: [
        { document_type: 'terms_and_conditions', accepted: true, url: '' },
        { document_type: 'privacy_notice', accepted: true, url: '' },
    ],
    product_code: null,
    height: '180',
    weight: '80',
    commercial_communications: null,
};

export const publicUser = user;

export default user;
