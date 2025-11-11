import { Project } from '~/modules/amos-api/types';
import useAppState from '../../hooks/useAppState';
import useFieldFormatters from '../../hooks/useFieldFormatters';
import SelectInput, { SelectInputProps } from './SelectInput';

interface LocaleInputProps extends Omit<SelectInputProps, 'options'> {
    options?: Array<{ label: string; value: string | number }>;
    type?: 'content' | 'service' | 'alternative';
    locales?: string[];
}

const getLocalesFromProject = (project: Project, localeType: 'content' | 'service' | 'alternative') => {
    if (localeType === 'content') {
        return project.contentLocales;
    }

    if (localeType === 'service') {
        return project.serviceLocales;
    }

    if (localeType === 'alternative') {
        return project.alternativeLocales;
    }

    return [];
};

const LocaleInput = ({ options, locales, type = 'service', ...props }: LocaleInputProps) => {
    const { project } = useAppState();
    const { formatLocale } = useFieldFormatters();
    const localeOptions = (locales || getLocalesFromProject(project, type)).map((locale) => ({
        label: formatLocale(locale),
        value: locale,
    }));

    return <SelectInput options={options || localeOptions} {...props} />;
};

export default LocaleInput;
