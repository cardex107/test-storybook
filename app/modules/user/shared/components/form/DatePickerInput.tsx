import 'flatpickr/dist/themes/light.css';
import { useField } from 'formik';
import { uniqueId } from 'lodash';
import { DateTimePickerProps } from 'react-flatpickr';
import { useTranslation } from 'react-i18next';
import useTranslateFieldError from '../../hooks/useTranslateFieldError';
import { formatDate } from '../../utils/date';
import { LocalizedFlatpicker } from '../LocalizedFlatpickr';
import { Field } from './Field';

interface DatePickerInputProps extends Field {
    options?: DateTimePickerProps['options'];
}

const DatePickerInput = ({
    name,
    label,
    className,
    disabled,
    hide,
    options,
    translationTokens,
    showAsRequired,
}: DatePickerInputProps) => {
    const [field, meta, helpers] = useField(name);
    const hasErrors = meta.touched && meta.error;
    const {
        i18n: { language: contentLocale },
    } = useTranslation();
    const DEFAULT_FORMAT = 'yyyy-MM-dd';
    const inputId = uniqueId(name);
    const translateFieldError = useTranslateFieldError({ label: label, tokens: translationTokens });

    const handleDateChange = (dates: Date[]) => {
        helpers.setValue(formatDate(dates[0], DEFAULT_FORMAT));
    };

    if (hide) {
        return null;
    }
    return (
        <div className={`${className} m-field ${hasErrors ? 'has-errors' : ''}`}>
            <label className="m-field__label " htmlFor={inputId}>
                {label}
                {showAsRequired ? ' *' : ''}
            </label>

            <div className="m-field__wrapper">
                <LocalizedFlatpicker
                    inline={false}
                    locale={contentLocale}
                    value={field.value}
                    onChange={handleDateChange}
                    disabled={disabled}
                    options={{
                        dateFormat: 'Y/m/d',
                        ...options,
                    }}
                    render={({ defaultValue }, ref) => {
                        return (
                            <input
                                defaultValue={defaultValue}
                                ref={ref}
                                className="a-input"
                                id={inputId}
                                data-testid="datepicker-input"
                                disabled={disabled}
                                style={
                                    disabled
                                        ? {}
                                        : {
                                              cursor: 'pointer',
                                              backgroundColor: '#fff',
                                              color: '#000',
                                          }
                                }
                            />
                        );
                    }}
                />
            </div>

            {meta.error && <div className="m-field__error-message">{translateFieldError(meta.error)}</div>}
        </div>
    );
};

export default DatePickerInput;
