import { GenderIdentity } from '~/modules/amos-api/enums';
import useFieldFormatters from '../../hooks/useFieldFormatters';
import SelectInput, { SelectInputProps } from './SelectInput';

interface GenderIdentityInputProps extends Omit<SelectInputProps, 'options'> {
    options?: Array<{ label: string; value: string | number }>;
}

const GenderIdentityInput = ({ options, ...props }: GenderIdentityInputProps) => {
    const { formatGenderIdentity } = useFieldFormatters();
    const genders = [
        { label: formatGenderIdentity('male'), value: GenderIdentity.male },
        { label: formatGenderIdentity('female'), value: GenderIdentity.female },
        { label: formatGenderIdentity('transgender'), value: GenderIdentity.transgender },
        { label: formatGenderIdentity('non_binary'), value: GenderIdentity.nonBinary },
        { label: formatGenderIdentity('prefer_not_to_say'), value: GenderIdentity.preferNotToSay },
    ];

    return <SelectInput options={options ?? genders} {...props} />;
};

export default GenderIdentityInput;
