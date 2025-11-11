import { useField } from 'formik';
import { useEffect } from 'react';
import { Country } from '~/modules/amos-api/types';
import useAppState from '../../hooks/useAppState';
import SelectInput, { SelectInputProps } from './SelectInput';

interface CountryInputProps extends Omit<SelectInputProps, 'options'> {
    options?: Array<{ label: string; value: string | number }>;
}

const resolveReadOnlyCountry = (countries: Country[], value: string): Country | null => {
    const enabledCountries = countries.filter((country) => country.enabled);
    if (enabledCountries.length === 1) {
        const country = !value ? enabledCountries[0] : (countries.find((country) => country.key === value) ?? null);
        return country;
    }

    if (!value) {
        return null;
    }

    if (enabledCountries.find((country) => country.key === value)) {
        return null;
    }

    return countries.find((country) => country.key === value) ?? null;
};

const CountryInput = ({ ...props }: CountryInputProps) => {
    const { countries } = useAppState();
    const [field, , helper] = useField(props.name);
    const readOnlyCountry = resolveReadOnlyCountry(countries, field.value);

    useEffect(() => {
        if (readOnlyCountry && field.value !== readOnlyCountry.key) {
            helper.setValue(readOnlyCountry.key);
        }
    }, [field.value, helper, readOnlyCountry]);

    const actualCountries = readOnlyCountry
        ? [
              {
                  label: readOnlyCountry.value,
                  value: readOnlyCountry.key,
              },
          ]
        : countries
              .filter((country) => country.enabled)
              .map((country) => ({
                  label: country.value,
                  value: country.key,
              }));

    return (
        <SelectInput
            selectInputClassname={readOnlyCountry ? 'a-select__input--disabled' : ''}
            readonly={Boolean(readOnlyCountry)}
            options={actualCountries}
            {...props}
        />
    );
};

export default CountryInput;
