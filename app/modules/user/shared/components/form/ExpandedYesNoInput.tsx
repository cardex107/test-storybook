import { useField, useFormikContext } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import { OptionsInputProps } from './OptionsInput';
import OptionsInputControl from './OptionsInputControl';

export interface ExpandedYesNoInputProps extends Omit<OptionsInputProps, 'options'> {
    inputTextLabel: string;
    yesLabel?: string;
    noLabel?: string;
    reverse?: boolean;
    readOnly?: boolean;
}

const ExpandedYesNoInput = ({
    label,
    inputTextLabel,
    className,
    yesLabel,
    noLabel,
    reverse,
    readOnly,
    testId,
    disabled,
    vertical,
    labelClassName,
    showAsRequired,
    ...props
}: ExpandedYesNoInputProps) => {
    const translateFieldError = useTranslateFieldError({ label: '' });
    const [showTextInput, setShowTextInput] = useState(false);
    const [optionValue, setOptionValue] = useState<number | undefined>();
    const [field, meta, helpers] = useField(props.name);
    const { t } = useTranslation();
    const { submitCount } = useFormikContext();
    const hasErrors = submitCount && meta.error;

    yesLabel = yesLabel ?? t('common.yes');
    noLabel = noLabel ?? t('common.no');

    const handleClickOption = (value: number | string) => {
        setOptionValue(Number(value));
        setShowTextInput(Boolean(value));
        if (!value) {
            helpers.setValue(noLabel);
        } else {
            helpers.setValue('');
        }
    };

    let options = [
        { label: yesLabel, value: 1 },
        { label: noLabel, value: 0 },
    ];

    if (reverse) {
        options = options.reverse();
    }

    if (readOnly) {
        options = options.filter((option) => option.value === field.value);
        disabled = true;
    }

    return (
        <div
            className={`${className} m-field ${hasErrors ? 'has-errors' : ''}`}
            style={{ display: 'block' }}
            data-testid={`${testId}-input`}
        >
            <div className="m-field__question-wrapper">
                <label className={`m-field__question-label ${labelClassName}`}>
                    {label}
                    {showAsRequired ? ' *' : ''}
                </label>
                <div className="m-field__question-options">
                    <OptionsInputControl
                        onChange={handleClickOption}
                        options={options}
                        testId={testId}
                        value={optionValue}
                        styleType="small"
                        disabled={disabled}
                        vertical={vertical}
                    />
                </div>
            </div>
            <div
                className={`m-field ${hasErrors ? 'has-errors' : ''}`}
                style={{ display: 'block' }}
                data-testid={props.name}
            >
                {showTextInput && (
                    <div className="m-field__question-input-wrapper">
                        <label className={`m-field__question-label`}>
                            {inputTextLabel}
                            {showAsRequired ? ' *' : ''}
                        </label>
                        <textarea className="a-textarea" id={props.name} rows={3} disabled={disabled} {...field} />
                    </div>
                )}

                {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
            </div>
        </div>
    );
};

export default ExpandedYesNoInput;
