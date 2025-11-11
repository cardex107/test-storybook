import { ApiError } from '../infrastructure/services/ApiError';
import { useTranslation } from 'react-i18next';

type TranslateErrorOptions = { tokens?: Record<string, string> };

const useTranslateError = (options?: TranslateErrorOptions) => {
    const { t } = useTranslation();
    return (error: unknown) => {
        if (error === null) {
            return '';
        }

        if (!(error instanceof ApiError)) {
            return String(error);
        }

        return t(error.message, options?.tokens);
    };
};

export default useTranslateError;
