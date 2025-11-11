import { useField } from 'formik';
import { useState } from 'react';
import Link from '~/shared/components/Link';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import HideIcon from '../icon/Hide';
import ShowIcon from '../icon/Show';
import { Field } from './Field';

interface TextInputProps extends Field {
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number';
    value?: string;
    link?: {
        label: string;
        to: string;
    };
    autoComplete?: string;
}

const TextInput = ({
    name,
    label,
    className,
    placeholder,
    type,
    disabled,
    value,
    hide,
    showAsRequired,
    link,
    autoComplete = 'none',
    ...props
}: TextInputProps) => {
    const [inputType, setInputType] = useState(type ?? 'text');
    const [field, meta] = useField(name);
    const translateFieldError = useTranslateFieldError({ label, tokens: props.translationTokens });
    const hasErrors = meta.touched && meta.error;

    console.log(meta.error, meta.touched);

    const showPassword = () => {
        setInputType('text');
    };

    const hidePassword = () => {
        setInputType('password');
    };

    field.value = value || field.value;

    if (hide) {
        return null;
    }

    return (
        <div
            className={`${className ?? ''} m-field ${hasErrors ? 'has-errors' : ''}`}
            style={{ display: 'block' }}
            data-testid={name}
        >
            <label className="m-field__label " htmlFor={name}>
                {label}
                {showAsRequired ? ' *' : ''}
            </label>
            {link ? (
                <Link to={link.to} className="m-field__link" tabIndex={-1}>
                    {link.label}
                </Link>
            ) : (
                ''
            )}
            <div className="m-field__wrapper">
                <input
                    type={inputType}
                    className="a-input"
                    placeholder={placeholder}
                    id={name}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    {...field}
                />
                {type === 'password' && inputType === 'password' && (
                    <span className="m-field__icon m-field__icon--password" onClick={showPassword}>
                        <ShowIcon />
                    </span>
                )}
                {type === 'password' && inputType !== 'password' && (
                    <span className="m-field__icon m-field__icon--password" onClick={hidePassword}>
                        <HideIcon />
                    </span>
                )}
            </div>

            {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};

export default TextInput;
