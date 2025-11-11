import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import OptionsInput, { OptionsInputProps } from './OptionsInput';

export interface YesNoInputProps extends Omit<OptionsInputProps, 'options'> {
    yesLabel?: string;
    noLabel?: string;
    reverse?: boolean;
    readOnly?: boolean;
}

const YesNoInput = ({ yesLabel, noLabel, reverse, readOnly, ...props }: YesNoInputProps) => {
    const [field] = useField(props.name);
    const { t } = useTranslation();

    yesLabel = yesLabel ?? t('common.yes');
    noLabel = noLabel ?? t('common.no');

    let options = [
        { label: yesLabel, value: 1 },
        { label: noLabel, value: 0 },
    ];

    if (reverse) {
        options = options.reverse();
    }

    if (readOnly) {
        options = options.filter((option) => option.value === field.value);
        props.disabled = true;
    }

    return <OptionsInput options={options} {...props} />;
};

export default YesNoInput;
