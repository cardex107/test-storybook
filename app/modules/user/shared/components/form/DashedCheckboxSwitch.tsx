import React from 'react';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import InlineLoading from '../InlineLoading';
import DashedBox from '../layout/dashed-box/DashedBox';
import { Field } from './Field';

interface DashedCheckboxSwitchProps extends Omit<Field, 'label'> {
    label: string | React.ReactElement;
    isLoading?: boolean;
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    showAsRequired?: boolean;
    hide?: boolean;
    onChange?: (name: string, value: boolean) => void;
    canUncheck?: boolean;
    error?: string;
}

const DashedCheckboxSwitch = ({
    name,
    label,
    isLoading = false,
    disabled = false,
    showAsRequired,
    onChange,
    canUncheck = true,
    error,
    ...props
}: DashedCheckboxSwitchProps) => {
    const translateFieldError = useTranslateFieldError({ label: typeof label === 'string' ? label : '' });

    const handleChange = (e: any) => {
        if (!canUncheck) {
            e.preventDefault();
            e.target.checked = true;
        }

        if (typeof onChange === 'function') {
            onChange(name, e.target.checked);
        }
    };
    const hasErrors = !!error;
    const inputProps = {
        onChange: handleChange,
        value: name,
        checked: props.checked,
    };

    return (
        <DashedBox className={'h-margin-top-10'}>
            <div className={`o-form__checkbox m-field h-margin-top-10 ${hasErrors ? 'has-errors' : ''}`}>
                <div className="m-field__wrapper">
                    <div className="a-checkbox ">
                        {!isLoading && (
                            <input
                                type="checkbox"
                                className="a-checkbox__input"
                                id={name}
                                name={name}
                                disabled={disabled || isLoading}
                                {...inputProps}
                            />
                        )}
                        {isLoading && <InlineLoading />}
                        <label className={`a-checkbox__label ${isLoading ? 'a-checkbox__loading' : ''}`} htmlFor={name}>
                            {label}
                            {showAsRequired ? ' *' : ''}
                        </label>
                    </div>
                </div>

                {!!error && <div className="m-field__error-message">{translateFieldError(error)}</div>}
            </div>
        </DashedBox>
    );
};
export default DashedCheckboxSwitch;
