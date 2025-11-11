import Flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/light.css';
import { useEffect, useState } from 'react';
import ReactFlatpickr, { DateTimePickerProps } from 'react-flatpickr';
import loadLocalization, {
    convertLocaleToFlatpickrLocale,
} from '~/shared/infrastructure/flatpickr/localization-loader';

export type DateLimit = Flatpickr.Options.DateLimit;

export interface LocalizedFlatpickrProps extends DateTimePickerProps {
    locale: string;
    startDate?: string;
    endDate?: string;
    currentDate?: string;
    inline: boolean;
}

export const LocalizedFlatpicker = ({ locale, startDate, endDate, inline, ...props }: LocalizedFlatpickrProps) => {
    const [options, setOptions] = useState(null);

    useEffect(() => {
        const loadOptions = async () => {
            await loadLocalization(locale);
            setOptions({
                minDate: startDate,
                maxDate: endDate,
                inline,
                ...props.options,
                //@ts-expect-error Flatpickr does not support TS in this case
                locale: Flatpickr.l10ns[convertLocaleToFlatpickrLocale(locale)],
            });
        };
        loadOptions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, props.options]);

    if (!options) {
        return null;
    }

    return <ReactFlatpickr data-testid="datepicker" {...props} className={props.className ?? ''} options={options} />;
};
