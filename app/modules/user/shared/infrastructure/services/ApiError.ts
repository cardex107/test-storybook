import { AxiosError } from 'axios';
import { FieldError, apiErrorMap } from '../../config/apiErrorMap';

export class ApiError extends Error {
    originalMessage: string = '';
    code: number | null = null;
    message: string = 'errors.generic';
    field: string | null = null;
    data?: Record<string, any>;

    constructor() {
        super();
    }

    static isErrorResponse(data: unknown): data is { message: string; code: number; data?: Record<string, any> } {
        if (!data || typeof data !== 'object') {
            return false;
        }

        // for GFP error code 150 and numberic message codes
        if ('error' in data && 'message' in data && data.error === 150 && typeof data.message === 'number') {
            return true;
        }

        if ('message' in data && 'code' in data && typeof data.message === 'string' && typeof data.code === 'number') {
            return true;
        }

        return false;
    }

    static createFromAxiosError(error: AxiosError): ApiError {
        const apiError = new ApiError();

        if (error.response && this.isErrorResponse(error.response.data)) {
            apiError.originalMessage = error.response.data.message;
            apiError.code = error.response.data.code;
            apiError.data = error.response.data.data;

            const translatedError = apiError.translateError(apiError.code, error.response?.config.url ?? null, {
                error: 'errors.generic',
                field: null,
            });

            apiError.message = translatedError.error;
            apiError.field = translatedError.field;
        }

        return apiError;
    }

    translateError(code: number, requestUrl: string | null, defaultValue: FieldError, message = ''): FieldError {
        // for GFP error code 150 and numberic message codes
        if (code === 150 && message !== '' && !Number.isNaN(message))
            return {
                error: message,
                field: '',
            };

        const index = requestUrl ?? 'default';

        const translations = apiErrorMap.get(index);

        if (!translations) {
            return apiErrorMap.get('default')![code] ?? defaultValue;
        }

        if (code in translations || 'default' in translations) {
            return translations[code] ?? translations.default;
        }

        return apiErrorMap.get('default')![code] ?? defaultValue;
    }
}
