import { useTranslation } from 'react-i18next';
import SelectInput, { SelectInputProps } from './SelectInput';

interface RelationshipInputProps extends Omit<SelectInputProps, 'options'> {
    options?: string[];
}

const RelationshipInput = ({ options, ...props }: RelationshipInputProps) => {
    const { t } = useTranslation();
    const defaultRelationshipTypes = [
        {
            label: t('fields.relation_type.options.daughter.label'),
            value: 'daughter',
        },
        { label: t('fields.relation_type.options.son.label'), value: 'son' },
        {
            label: t('fields.relation_type.options.other.label'),
            value: 'other',
        },
    ];

    let actualOptions = defaultRelationshipTypes;

    if (options) {
        actualOptions = options.map((option) => ({
            label: t(`fields.relation_type.options.${option}.label`),
            value: option,
        }));
    }

    return <SelectInput options={actualOptions} {...props} />;
};

export default RelationshipInput;
