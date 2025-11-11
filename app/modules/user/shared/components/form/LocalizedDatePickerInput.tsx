import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../utils/date';
import { LocalizedFlatpicker } from '../LocalizedFlatpickr';

export interface LocalizedDatePickerInputProps {
    locale: string;
    label: string;
    name: string;
    startDate: string;
    endDate: string;
    description?: string;
    showAsRequired?: boolean;
}

const LocalizedDatePickerInput = ({
    locale,
    name,
    startDate,
    endDate,
    label,
    description,
    showAsRequired,
}: LocalizedDatePickerInputProps) => {
    const { t } = useTranslation();
    const { errors, setFieldValue } = useFormikContext<any>();

    const handleDateChange = (dates: Date[]) => {
        setFieldValue(name, formatDate(dates[0], 'yyyy-MM-dd'));
    };

    return (
        <div className="m-field-appointment-calendar">
            <label className="m-field__label " htmlFor="init_date_proposed">
                {label} {showAsRequired && '*'}
            </label>

            {description && <p className="m-field__description">{description}</p>}

            <div className="m-field-appointment-calendar__inner">
                <div className="m-field-appointment-calendar__wrapper-calendar">
                    <div className="m-field-appointment-calendar__wrapper-calendar">
                        <LocalizedFlatpicker
                            locale={locale}
                            inline={true}
                            startDate={startDate}
                            endDate={endDate}
                            name={name}
                            onChange={handleDateChange}
                        />
                        {errors.init_date && <div className="m-field__error-message">{t(errors[name] as string)}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalizedDatePickerInput;
