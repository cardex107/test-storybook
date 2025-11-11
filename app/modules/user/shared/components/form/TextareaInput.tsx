import { useField } from 'formik';
import { uniqueId } from 'lodash';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import { Field } from './Field';

interface TextareaInputProps extends Field {
    placeholder?: string;
    labelClassName?: string;
    rows?: number;
}

const TextareaInput = ({
    name,
    label,
    className,
    placeholder,
    disabled,
    hide,
    showAsRequired,
    labelClassName,
    rows = 3,
}: TextareaInputProps) => {
    const [field, meta] = useField(name);
    const hasErrors = meta.touched && meta.error;
    const translateFieldError = useTranslateFieldError({ label });
    const inputId = uniqueId(name);

    if (hide) {
        return null;
    }

    return (
        <div className={`${className} m-field ${hasErrors ? 'has-errors' : ''}`} style={{ display: 'block' }}>
            <label className={`${labelClassName} m-field__label`} htmlFor={inputId} style={{ display: 'block' }}>
                {label}
                {showAsRequired ? ' *' : ''}
            </label>

            <div className="m-field__wrapper">
                <textarea
                    className="a-textarea"
                    placeholder={placeholder}
                    id={inputId}
                    rows={rows}
                    cols={80}
                    disabled={disabled}
                    {...field}
                />
            </div>

            {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};

export default TextareaInput;
