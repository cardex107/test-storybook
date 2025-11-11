import { FormikErrors, useFormikContext } from 'formik';
import Button, { ButtonProps } from '../Button';
import { useCallback } from 'react';

interface SubmitButtonProps extends ButtonProps {
    onSubmitInvalidForm?: (error: FormikErrors<unknown>) => void;
}

const SubmitButton = ({ styleType = 'secondary', onSubmitInvalidForm, ...props }: SubmitButtonProps) => {
    const { isValid, errors } = useFormikContext();

    const handleOnClick = useCallback(() => {
        if (!isValid && typeof onSubmitInvalidForm === 'function') {
            onSubmitInvalidForm(errors);
        }
    }, [errors, isValid, onSubmitInvalidForm]);

    return <Button wrapperTag="button" type="submit" onClick={handleOnClick} styleType={styleType} {...props} />;
};

export default SubmitButton;
