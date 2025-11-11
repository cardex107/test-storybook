import { useField } from 'formik';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '~/modules/amos-api/types';
import useAppState from '../../hooks/useAppState';
import { DownArrow } from '../icon/DownArrow';

interface PhoneNumberInput {
    name: string;
    label: string;
    id?: string;
    className?: string;
    disabled?: boolean;
    hide?: boolean;
    showAsRequired?: boolean;
    onChangePrefix?: (value: string) => void;
    onChangePhone?: (value: string) => void;
}

const extractPrefixesFromCountries = (countries: Array<Country>): Array<string> => {
    const prefixes = new Set<number>();

    countries.filter((country) => country.enabled).forEach((country) => prefixes.add(parseInt(country.phone_code)));

    const results = Array.from(prefixes).sort((a: number, b: number) => a - b);
    return results.map((prefix) => `+${prefix}`);
};

const resolveReadOnlyPrefix = (prefixes: string[], value: string): string | null => {
    if (prefixes.length === 1) {
        return !value ? prefixes[0] : value;
    }

    if (!value) {
        return null;
    }

    const found = prefixes.find((prefix) => prefix === value);
    return !found ? value : null;
};

const isValidPrefix = (prefix: string): boolean => {
    if (!prefix) {
        return true;
    }
    return /\+\d+/.test(prefix);
};

const PhoneNumberInput = ({
    name,
    label,
    id,
    className,
    disabled,
    hide,
    showAsRequired,
    onChangePhone,
    onChangePrefix,
}: PhoneNumberInput) => {
    const [field, meta, helpers] = useField(name);
    const { t } = useTranslation();
    let { countries } = useAppState();
    const fieldError = meta.error as { prefix: string; phone: string } | undefined;
    const hasErrors = meta.touched && meta.error;

    countries = countries.filter((country) => country.enabled);
    const prefixes = extractPrefixesFromCountries(countries);
    const readOnlyPrefix =
        isValidPrefix(field.value.prefix) && showAsRequired && resolveReadOnlyPrefix(prefixes, field.value.prefix);

    useEffect(() => {
        if (readOnlyPrefix && field.value.prefix !== readOnlyPrefix) {
            helpers.setValue({
                ...field.value,
                prefix: readOnlyPrefix,
            });
        }
    }, [field.value, helpers, readOnlyPrefix]);

    const handlePrefixChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        helpers.setTouched(true);
        helpers.setValue({ ...field.value, prefix: event.target.value });

        if (typeof onChangePrefix === 'function') {
            onChangePrefix(event.target.value);
        }
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        helpers.setTouched(true);
        helpers.setValue({ ...field.value, phone: event.target.value });

        if (typeof onChangePhone === 'function') {
            onChangePhone(event.target.value);
        }
    };

    if (hide) {
        return null;
    }

    return (
        <div className={`${className} m-field ${hasErrors ? 'has-errors' : ''}`}>
            <label className="m-field__label " htmlFor={id}>
                {label}
                {showAsRequired ? ' *' : ''}
            </label>

            <div className="m-select-combo">
                <div className="m-select-combo__select a-select">
                    <select
                        className={`a-select__input ${readOnlyPrefix ? 'a-select__input--disabled' : ''}`}
                        onChange={handlePrefixChange}
                        value={field.value.prefix}
                        disabled={disabled}
                        data-testid="phone-number-prefix"
                    >
                        {readOnlyPrefix && isValidPrefix(field.value.prefix) && (
                            <option key={readOnlyPrefix} value={readOnlyPrefix}>
                                {readOnlyPrefix}
                            </option>
                        )}

                        {(!readOnlyPrefix || !isValidPrefix(field.value.prefix)) && (
                            <>
                                <option key="none" value="">
                                    [...]
                                </option>

                                {prefixes.map((prefix) => (
                                    <option key={prefix} value={prefix}>
                                        {prefix}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                    <DownArrow />
                </div>
                <input
                    type="number"
                    name={name}
                    className="a-input"
                    onChange={handlePhoneChange}
                    value={field.value.phone}
                    disabled={disabled}
                    aria-label={label}
                    data-testid="phone-number-input"
                />
            </div>
            {fieldError && (
                <div className="m-field__error-message">
                    {t(fieldError.prefix || fieldError.phone, { attribute: 'phone' })}
                </div>
            )}
        </div>
    );
};

export default PhoneNumberInput;
