export type FieldError = {
    error: string;
    field: string | null;
};

export const apiErrorMap = new Map<string, Record<number | string, FieldError>>([
    [
        'clients-me/update-pwd',
        {
            115: { error: 'fields.password.error.violated_minimum_age', field: null },
            117: { error: 'fields.password.error.cannot_be_on_history', field: null },
            118: { error: 'fields.password.error.based_dictionary_words', field: null },
            440: { error: 'fields.old_password.error.not_match', field: null },
        },
    ],
    [
        'clients/recovery-pwd',
        {
            115: { error: 'fields.password.error.violated_minimum_age', field: null },
            117: { error: 'fields.password.error.cannot_be_on_history', field: null },
            118: { error: 'fields.password.error.based_dictionary_words', field: null },
            440: { error: 'fields.old_password.error.not_match', field: null },
            150: { error: 'form.max_submissions.error', field: null },
        },
    ],
    [
        'dependents/create',
        {
            430: { error: 'validation.dependents.dependent_code_already_exists', field: null },
            440: { error: 'validation.dependents.dependent_must_be_minor', field: null },
            150: { error: 'validation.dependents.cannot_edit', field: null },
        },
    ],
    [
        'clients-me/add-beneficiary',
        {
            150: { error: 'validation.beneficiaries.cannot_add', field: null },
        },
    ],
    [
        'clients-me/remove-beneficiary',
        {
            150: { error: 'validation.beneficiaries.cannot_remove', field: null },
        },
    ],
    [
        'clients-me/resend-beneficiary-invitation',
        {
            150: { error: 'beneficiaries.resend.limit-error.text', field: null },
            440: { error: 'beneficiaries.resend.limit-error.text', field: null },
        },
    ],
    [
        'clients-session/complete-session-verification',
        {
            430: { error: 'mfa.validation.incorrect_code', field: null },
        },
    ],
    [
        'omc-consultations/create',
        {
            405: { error: 'validation.consultations.allowed_configuration', field: null },
            150: { error: 'validation.appointment.no_availability', field: null },
            450: { error: 'common.complete.postal-data.text', field: null },
            default: { error: 'validation.consultations.cannot_add', field: null },
        },
    ],
    [
        'sc-consultations/create',
        {
            450: { error: 'common.complete.postal-data.text', field: null },
            default: { error: 'validation.consultations.cannot_add', field: null },
        },
    ],
    [
        'derma-ai-consultations/create',
        {
            450: { error: 'common.complete.postal-data.text', field: null },
            default: { error: 'validation.consultations.cannot_add', field: null },
        },
    ],
    [
        'gfp-consultations/create',
        {
            450: { error: 'common.complete.postal-data.text', field: null },
            default: { error: 'validation.consultations.cannot_add', field: null },
        },
    ],
    [
        'auth/login',
        {
            440: { error: 'validation.login.invalid_client_code', field: null },
            125: { error: 'validation.login.blocked', field: null },
            120: { error: 'validation.login.invalid_data', field: null },
            403: { error: 'validation.login.password_expired', field: null },
        },
    ],
    [
        'signup',
        {
            118: { error: 'fields.password.error.based_dictionary_words', field: 'password' },
            default: { error: 'validation.register.general', field: null },
        },
    ],
    [
        'default',
        {
            140: { error: 'Session error', field: null },
            400: { error: 'errors.method_not_allowed', field: null },
        },
    ],
]);
