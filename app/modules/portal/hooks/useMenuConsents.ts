import { useMemo } from 'react';
import { DEFAULT_CONSENT_PROVIDER } from '~/modules/user/shared/config/constants';
import useProject from '~/modules/user/shared/hooks/useProject';
import { useTranslation } from 'react-i18next';

const useMenuConsents = () => {
    const project = useProject();
    const { t } = useTranslation();
    return useMemo(() => {
        const defaultConsents = [
            {
                documentType: 'terms_and_conditions',
                title: t('conditions.title'),
                link: '/terms-and-conditions',
                linkTarget: '',
            },
            {
                documentType: 'privacy_notice',
                title: t('disclaimer.title'),
                link: '/disclaimer',
                linkTarget: '',
            },
        ];

        if (project.use_legal_notice) {
            defaultConsents.push({
                documentType: 'legal_notice',
                title: t('legal_notice.title'),
                link: '/legal-notice',
                linkTarget: '',
            });
        }

        const consentProvider = project.consent_provider ?? DEFAULT_CONSENT_PROVIDER;

        if (consentProvider === DEFAULT_CONSENT_PROVIDER) {
            return defaultConsents;
        }

        const consents = [];

        for (const consent of defaultConsents) {
            if (project.consents.some((c) => c.document_type === consent.documentType)) {
                consents.push({
                    documentType: consent.documentType,
                    title: consent.title,
                    link: `/legaldocs/${consent.documentType}`,
                    linkTarget: '_blank',
                });
            }
        }

        return consents;
    }, [project.consent_provider, project.consents, project.use_legal_notice, t]);
};

export default useMenuConsents;
