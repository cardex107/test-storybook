/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField } from 'formik';
import { uniqueId } from 'lodash';
import React, { type MouseEventHandler } from 'react';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import { Field } from './Field';

interface CheckboxInputProps extends Omit<Field, 'label'> {
    label: string | React.ReactElement;
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    showAsRequired?: boolean;
    overriden?: boolean;
    hide?: boolean;
    onChange?: (name: string, value: boolean) => void;
    canUncheck?: boolean;
    link?: { target?: string; href?: string; title: string; onClick?: MouseEventHandler<HTMLAnchorElement> };
}

const CheckboxInput = ({
    name,
    label,
    className,
    disabled,
    showAsRequired,
    onChange,
    hide,
    overriden,
    canUncheck = true,
    link,
    ...props
}: CheckboxInputProps) => {
    const checkboxId = uniqueId(name);
    const handleChange = (e: any) => {
        if (!canUncheck) {
            e.preventDefault();
            e.target.checked = true;
        }

        if (typeof onChange === 'function') {
            onChange(name, e.target.checked);
        }
    };
    const translateFieldError = useTranslateFieldError({ label: typeof label === 'string' ? label : '' });

    const [field, meta] = useField(name);
    const hasErrors = meta.touched && meta.error;
    const inputProps: any = { ...field, checked: field.value };

    if (overriden) {
        inputProps.onChange = handleChange;
        inputProps.value = name;
        inputProps.checked = props.checked;
    }

    if (hide) {
        return null;
    }

    return (
        <div className={`${className} o-form__checkbox m-field ${hasErrors ? 'has-errors' : ''}`}>
            <div className="m-field__wrapper">
                <div className="a-checkbox ">
                    <input
                        type="checkbox"
                        className="a-checkbox__input"
                        id={checkboxId}
                        disabled={disabled}
                        {...inputProps}
                    />
                    <label className="a-checkbox__label" htmlFor={checkboxId}></label>
                    <label className="a-checkbox__text" htmlFor={checkboxId}>
                        {label}
                        {link && (
                            <a
                                className="a-checkbox__link"
                                href={link.href}
                                target={link.target ?? '_self'}
                                onClick={link.onClick}
                                style={{ paddingLeft: '0.3em' }}
                            >
                                {link.title}
                            </a>
                        )}
                        {showAsRequired ? ' *' : ''}
                    </label>
                </div>
            </div>

            {meta?.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};

export default CheckboxInput;
