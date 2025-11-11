import { useTranslation } from 'react-i18next';
import { InfoMessage } from './InfoMessage';

interface TimeSlotsProps {
    slots: string[];
    value?: string;
    disabled?: boolean;
    onChange: (time: string) => void;
}
export const TimeSlots = ({ slots, value, disabled, onChange }: TimeSlotsProps) => {
    const { t } = useTranslation();

    const handleSelectTime = (slot: string) => {
        if (disabled) {
            return;
        }

        if (typeof onChange === 'function') {
            onChange(slot);
        }
    };

    if (!slots.length) {
        return (
            <InfoMessage
                className="o-grid__span o-grid__span--24 h-margin-bottom-20"
                message={t('validation.appointment.slots_not_available')}
            />
        );
    }

    return (
        <div className="m-field-appointment-calendar__wrapper-hours" data-testid="slots">
            <div className="m-field-appointment-calendar__hours">
                {slots.map((slot) => (
                    <div
                        key={slot}
                        className="m-field-appointment-calendar__hour a-radio-button-toggle a-radio-button-toggle--small"
                        onClick={() => handleSelectTime(slot)}
                    >
                        <input
                            className="a-radio-button-toggle__input"
                            type="radio"
                            name="hour"
                            checked={value === slot}
                            value={slot}
                            disabled={disabled}
                            onChange={() => {}}
                        />
                        <label className="a-radio-button-toggle__label" htmlFor="hour">
                            {slot}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
