import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import useTranslateError from '../../hooks/useTranslateError';
import { ApiError } from '../../infrastructure/services/ApiError';
import ErrorMessage from '../ErrorMessage';

interface ApiErrorMessageProps {
    error: ApiError;
}

const ApiErrorMessage = ({ error }: ApiErrorMessageProps) => {
    const translateError = useTranslateError();
    const { setFieldError } = useFormikContext();
    const { field, message } = error;

    useEffect(() => {
        if (field) {
            setFieldError(field, message);
        }
    }, [message, field, setFieldError]);

    if (field) {
        return null;
    }

    return <ErrorMessage message={translateError(error)} />;
};

export default ApiErrorMessage;
