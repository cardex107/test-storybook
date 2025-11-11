import { useTranslation } from 'react-i18next';
import { ConsultationStatus } from '~/modules/amos-api/enums';

export default function useFieldFormatters() {
    const { t } = useTranslation();

    const formatGender = (gender: string): string => t(`fields.gender.options.${gender}.label`);
    const formatGenderIdentity = (genderIdentity: string): string =>
        t(`fields.gender_identity.options.${genderIdentity}.label`);
    const formatCountry = (country: string): string => t(`static-data-countries.${country}`);
    const formatRelationship = (relationship: string): string =>
        t(`fields.relation_type.options.${relationship}.label`);
    const formatStatus = (status: ConsultationStatus): string => t(`consultations.status.${status}`);
    const formatChannel = (channel: string): string => t(`common.channel.${channel}`);
    const formatServiceType = (serviceType: string): string => t(`${serviceType}.title`);
    const formatSpecialty = (specialty: string): string => t(`fields.specialty.options.${specialty}`);
    const formatSpecialtyType = (specialtyType: string) => t(`static-data-emo-specialty-types.${specialtyType}`);

    const formatLocale = (locale: string): string => t(`locales.${locale}.long`);

    const formatGFPPrograms = (program_options: string[]) => {
        if (!program_options.length) return [];

        return program_options.map((program: string) => ({
            label: t(program),
            value: program,
        }));
    };

    return {
        formatGender,
        formatGenderIdentity,
        formatCountry,
        formatRelationship,
        formatStatus,
        formatChannel,
        formatServiceType,
        formatSpecialty,
        formatSpecialtyType,
        formatLocale,
        formatGFPPrograms,
    };
}
