import { ConsultationServiceType } from '~/modules/amos-api/enums';
import { Project } from '~/modules/amos-api/types';
import { DEFAULT_TEMPLATE_NAME, DEFAULT_TEMPLATE_STYLES } from '~/modules/user/shared/config/constants';

export type ProjectTemplate = {
    name: string;
    styles?: string;
};

export const getTemplate = (project?: Project): ProjectTemplate => {
    if (!project?.portal_template) {
        return {
            name: DEFAULT_TEMPLATE_NAME,
            styles: DEFAULT_TEMPLATE_STYLES,
        };
    }

    const [name, styles] = project.portal_template.split(':');
    return {
        name: name,
        styles: styles || DEFAULT_TEMPLATE_STYLES,
    };
};

export const resolveCSSVariables = (project?: Project) => {
    if (!project?.resources?.colors) {
        return `:root {
            --brand-color-1: #00b5e2;
            --brand-color-2: #351f65;
            --text_color: #333333;
            --site-background-color: #ffffff;
        }`;
    }
    return `
    :root {
        --brand-color-1: ${project.resources.colors.brand_color_1};
        --brand-color-2: ${project.resources.colors.brand_color_2};
        --text_color: ${project.resources.colors.text_color};
        --site-background-color: ${project.resources.colors.background_color};
        --service-card-background-color: ${project.resources.colors.iframe_service_card_background_color};
    }
    `;
};

/**
 * @param serviceRef: Service reference like 'omc|dermatology', 'sc'
 */
export const resolveServiceVersion = ({
    project,
    serviceType,
    specialty,
}: {
    project: Project;
    serviceType: ConsultationServiceType;
    specialty?: string;
}) => {
    let serviceRef: string = serviceType;
    serviceRef += specialty ? `|${specialty}` : '';

    const service = project.services[serviceRef];
    if (!service) {
        console.error(`Service ${serviceRef} not found`);
        return '';
    }

    return service.version ?? 'v1';
};

export const hasDermatologyV2 = (project: Project) => {
    const version = resolveServiceVersion({
        project,
        serviceType: ConsultationServiceType.omc,
        specialty: 'dermatology',
    });

    return version === 'v2';
};

export const resolveProjectTitle = (project: Project, t: (key: string, ...rest: []) => string) => {
    const title = t('project.title');
    return title || project.name;
};
