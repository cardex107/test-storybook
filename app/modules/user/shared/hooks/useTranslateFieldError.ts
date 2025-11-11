import { useTranslation } from 'react-i18next';

type TranslateFieldErrorOptions = {
    label: string;
    tokens?: Record<string, string>;
};

const useTranslateFieldError = (options: TranslateFieldErrorOptions) => {
    const { t } = useTranslation();
    return (error: string) => {
        return t(error, {
            attribute: options.label,
            ...options?.tokens,
        });
    };
};

export default useTranslateFieldError;
