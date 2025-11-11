import { TIMEZONES } from '../../utils/timezones';
import SelectInput, { SelectInputProps } from './SelectInput';

interface TimezoneInputProps extends Omit<SelectInputProps, 'options'> {
    options?: Array<{ label: string; value: string | number }>;
}

const TimezoneInput = ({ options, ...props }: TimezoneInputProps) => {
    return (
        <SelectInput
            readonly={props.readonly}
            options={
                options ??
                TIMEZONES.map((timezone: string) => ({
                    label: timezone,
                    value: timezone,
                }))
            }
            {...props}
        />
    );
};

export default TimezoneInput;
