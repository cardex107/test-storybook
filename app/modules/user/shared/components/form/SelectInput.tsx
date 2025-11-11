import { useField } from 'formik';
import { uniqueId } from 'lodash';
import { ChangeEvent, useCallback, useEffect } from 'react';
import Link from '~/shared/components/Link';
import useOnAfterChange, { OnAfterChangeFunction } from '../../hooks/useOnAfterChange';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import { DownArrow } from '../icon/DownArrow';
import { Field } from './Field';

export interface SelectInputProps extends Field {
    placeholder?: string;
    options: Array<{ label: string; value: string | number }>;
    selectInputClassname?: string;
    onAfterChange?: OnAfterChangeFunction;
    link?: {
        label: string;
        to?: string;
        onClick?: () => void;
    };
    testId?: string;
}

const SelectInput = ({
    name,
    label,
    className,
    options,
    disabled,
    hide,
    placeholder,
    readonly,
    selectInputClassname,
    showAsRequired,
    onAfterChange,
    link,
}: SelectInputProps) => {
    const inputId = uniqueId(name);
    const [field, meta, helpers] = useField(name);
    const hasErrors = meta.touched && meta.error;
    const translateFieldError = useTranslateFieldError({ label });
    const handleSelect = useOnAfterChange(onAfterChange);

    useEffect(() => {
        if (field.value && !options.map((o) => o.value).includes(field.value)) {
            helpers.setValue('');
        }
    }, [field.value, helpers, options]);

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            helpers.setValue(event.target.value);
            handleSelect(event.target.value);
        },
        [handleSelect, helpers]
    );

    if (hide) {
        return null;
    }

    return (
        <div className={`${className} m-field ${hasErrors ? 'has-errors' : ''}`}>
            {label && (
                <label className="m-field__label " htmlFor={inputId}>
                    {label}
                    {showAsRequired ? ' *' : ''}
                </label>
            )}

            {link?.to && (
                <Link to={link.to} className="m-field__link">
                    {link.label}
                </Link>
            )}

            {link?.onClick && (
                <button type="button" onClick={link.onClick} className="m-field__link">
                    {link.label}
                </button>
            )}

            <div className="m-field__wrapper">
                <div className="a-select">
                    <select
                        className={`a-select__input ${selectInputClassname ?? ''}`}
                        id={inputId}
                        {...field}
                        disabled={disabled}
                        onChange={handleOnChange}
                    >
                        {readonly !== true && (
                            <option key="no_value" value="">
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <DownArrow />
                </div>
            </div>

            {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};

export default SelectInput;
