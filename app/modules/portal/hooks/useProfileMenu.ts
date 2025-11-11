import useAppState from '~/modules/user/shared/hooks/useAppState';
import useProject from '~/modules/user/shared/hooks/useProject';
import useTemplateConfiguration from './useTemplateConfiguration';
import { TemplateConfiguration } from '../config/templates';
import { useTranslation } from 'react-i18next';
import { isCQCActivated } from '~/modules/user/shared/infrastructure/services/profile';

type ProfileItem = {
    id: string;
    labelKey: string;
    url: string;
    alerts?: string[];
    permissions?: string[];
};

const PROFILE_MENU_ITEMS: ProfileItem[] = [
    { id: 'personal-details', labelKey: 'menu.personal_details', url: '/user/personal-details' },
    { id: 'postal-data', labelKey: 'menu.postal_data', url: '/user/postal-data', alerts: ['hasPostalData'] },
    {
        id: 'medical-history',
        labelKey: 'menu.medical_history',
        url: '/user/medical-history',
        alerts: ['hasMedicalData'],
    },
    { id: 'dependents', labelKey: 'menu.dependents', url: '/user/dependents', permissions: ['dependentsAllowed'] },
    {
        id: 'beneficiaries',
        labelKey: 'menu.beneficiary',
        url: '/user/beneficiaries',
        permissions: ['beneficiariesAllowed'],
    },
    {
        id: 'emergency-contacts',
        labelKey: 'menu.emergency_contacts',
        url: '/user/emergency-contacts',
        permissions: ['useEmergencyContacts'],
        alerts: ['hasEmergencyContacts'],
    },
    {
        id: 'gp-details',
        labelKey: 'menu.gp_details',
        url: '/user/gp-details',
        permissions: ['useGpDetails'],
        alerts: ['hasGpDetails'],
    },
    {
        id: 'id-verification',
        labelKey: 'menu.id_verification',
        url: '/user/id-verification',
        permissions: ['useVerificationId'],
        alerts: ['identityVerified'],
    },
    {
        id: 'contact',
        labelKey: 'menu.contact-us',
        url: '/user/contact',
        permissions: ['useContactForm'],
    },
];

function hasPermission(permissionsRequested: string[], permissions: Record<string, boolean>) {
    if (permissionsRequested.length === 0) {
        return true;
    }
    return permissionsRequested.every((permission) => !(permission in permissions) || permissions[permission]);
}

function hasAlert(alerts: string[], permissions: Record<string, boolean>) {
    if (alerts.length === 0) {
        return false;
    }
    return alerts.some((alert) => !(permissions[alert] ?? false));
}

function isVisible(item: ProfileItem, template: TemplateConfiguration) {
    if (template.visibleProfileMenuItems && !template.visibleProfileMenuItems.includes(item.id)) {
        return false;
    }
    if (template.hiddenProfileMenuItems && template.hiddenProfileMenuItems.includes(item.id)) {
        return false;
    }
    return true;
}

function useProfileMenu() {
    const { t } = useTranslation();
    const {
        product,
        auth: { user },
    } = useAppState();
    const project = useProject();
    const templateConfiguration = useTemplateConfiguration();

    const resolveMenu = () => {
        if (!user || !product) {
            return [];
        }

        const useEmergencyContacts = ['write', 'read'].includes(project.use_emergency_contacts);
        const useGpDetails = ['write', 'read'].includes(project.use_gp_details);
        const hasCQCActivated = isCQCActivated(project, user);

        const permissions = {
            useEmergencyContacts,
            useGpDetails,
            useVerificationId: project.identity_configuration.profile,
            dependentsAllowed: product.dependents.visible || product.dependents.editable,
            beneficiariesAllowed: product.beneficiaries.visible || product.beneficiaries.editable,
            hasMedicalData: user.has_medical_data,
            hasPostalData: hasCQCActivated ? user.has_postal_data : true,
            hasEmergencyContacts:
                useEmergencyContacts && user.use_emergency_contacts && hasCQCActivated
                    ? user.has_emergency_contacts
                    : true,
            hasGpDetails: useGpDetails && user.use_gp_details && hasCQCActivated ? user.has_gp_details : true,
            useContactForm: project.use_contact_form && Boolean(project.contact_support_email),
            identityVerified: hasCQCActivated ? user.identity_verified : true,
        };

        const items = PROFILE_MENU_ITEMS.filter(
            (item) => hasPermission(item.permissions ?? [], permissions) && isVisible(item, templateConfiguration)
        ).map((item) => ({
            id: item.id,
            title: t(item.labelKey),
            url: item.url,
            hasAlert: hasAlert(item.alerts ?? [], permissions),
        }));

        return items;
    };

    return resolveMenu();
}

export default useProfileMenu;
