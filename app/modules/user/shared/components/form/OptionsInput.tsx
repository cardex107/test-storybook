import { useField, useFormikContext } from 'formik';
import { useCallback } from 'react';
import useOnAfterChange, { OnAfterChangeFunction } from '../../hooks/useOnAfterChange';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import OptionsInputControl from './OptionsInputControl';
import { SelectInputProps } from './SelectInput';

export interface OptionsInputProps extends Omit<SelectInputProps, 'placeholder'> {
    styleType?: 'default' | 'small' | 'primary';
    onAfterChange?: OnAfterChangeFunction;
    vertical?: boolean;
    labelClassName?: string;
}

const sanitizeValue = (value: any): string | number => {
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }

    if (!isNaN(value) && typeof value === 'string') {
        return Number(value);
    }

    return value;
};

const OptionsInput = ({
    name,
    label,
    className,
    options,
    disabled,
    hide,
    showAsRequired,
    styleType,
    onAfterChange,
    vertical,
    labelClassName,
    testId = '',
}: OptionsInputProps) => {
    const [field, meta, helpers] = useField(name);
    const { submitCount } = useFormikContext();
    const hasErrors = submitCount && meta.error;
    const translateFieldError = useTranslateFieldError({ label });
    const handleClick = useOnAfterChange(onAfterChange);

    const handleClickOption = useCallback(
        (value: any) => {
            if (!disabled) {
                handleClick(value);
                helpers.setValue(value);
            }
        },
        [disabled, handleClick, helpers]
    );

    if (hide) {
        return null;
    }

    const currentValue = sanitizeValue(field.value);

    return (
        <div
            className={`${className} m-field ${hasErrors ? 'has-errors' : ''}`}
            style={{ display: 'block' }}
            data-testid={`${testId}-input`}
        >
            <label className={`m-field__label ${labelClassName}`}>
                {label}
                {showAsRequired ? ' *' : ''}
            </label>

            <OptionsInputControl
                onChange={handleClickOption}
                options={options}
                testId={testId}
                value={currentValue}
                styleType={styleType}
                disabled={disabled}
                vertical={vertical}
            />

            {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};

export default OptionsInput;
