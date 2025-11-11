import { useField } from 'formik';
import { MouseEvent, useCallback } from 'react';
import useOnAfterChange from '../../hooks/useOnAfterChange';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import { SelectInputProps } from './SelectInput';

export interface RadioInputProps extends Omit<SelectInputProps, 'label'> {}

const RadioInput = ({ name, className, options, onAfterChange }: RadioInputProps) => {
    const translateFieldError = useTranslateFieldError({ label: '' });
    const [field, meta, helpers] = useField(name);
    const hasErrors = meta.touched && meta.error;
    const handleSelect = useOnAfterChange(onAfterChange);

    const handleOnClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            let value: number | string = event.currentTarget.querySelector('input')!.value;

            if (!isNaN(Number(value))) {
                value = parseInt(value);
            }

            helpers.setValue(value);
            handleSelect(value);
        },
        [handleSelect, helpers]
    );

    if (!options.length) {
        return null;
    }

    return (
        <div className={`${className ?? ''} m-field ${hasErrors ? 'has-errors' : ''}`}>
            <div className="m-field__wrapper ">
                {options.map(({ value, label }) => (
                    <div className=" a-radio-button" key={value} onClick={handleOnClick}>
                        <input
                            type="checkbox"
                            className="a-radio-button__input"
                            value={value}
                            checked={value === field.value}
                            readOnly
                        />
                        <label className="a-radio-button__label">{label}</label>
                    </div>
                ))}
            </div>

            {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};
export default RadioInput;
