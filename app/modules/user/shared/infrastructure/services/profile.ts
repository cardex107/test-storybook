import { Client, Project } from '~/modules/amos-api/types';

const PROFILE_INFO_ROUTES_CASES = [
    {
        id: 'postal_data',
        client_key: 'has_postal_data',
        route: '/user/postal-data',
        text: 'menu.postal_data',
    },
    {
        id: 'emergency_contacts',
        client_key: 'has_emergency_contacts',
        route: '/user/emergency-contacts',
        setting: 'use_emergency_contacts',
        client_setting: 'use_emergency_contacts',
        redirect_actions: ['write'],
        text: 'menu.emergency_contacts',
    },
    {
        id: 'gp_details',
        client_key: 'has_gp_details',
        route: '/user/gp-details',
        setting: 'use_gp_details',
        client_setting: 'use_gp_details',
        redirect_actions: ['write'],
        text: 'menu.gp_details',
    },
    {
        id: 'identity_verified',
        client_key: 'identity_verified',
        route: '/user/id-verification',
        text: 'menu.id_verification',
    },
];

export const isCQCActivated = (project: Project, user: Client) =>
    project.validation_types_required?.includes('cqc') && user.country === 'GB';

const resolveProfileInfoRoutesCases = (project: Project, user: Client) => {
    if (!isCQCActivated(project, user)) {
        return [];
    }

    if (!project.identity_configuration.profile) {
        return PROFILE_INFO_ROUTES_CASES.filter((route) => route.id !== 'identity_verified');
    }

    return PROFILE_INFO_ROUTES_CASES;
};

export const resolveProfileNextRoute = (user: Client, project: Project): string | null => {
    const routes = resolveProfileInfoRoutesCases(project, user)
        .map((route) => {
            const routeSetting = route.setting;

            /**
             * Find if user has permissions to write specific profile information
             */
            if (routeSetting && project[routeSetting as keyof Project]) {
                const action: unknown = project[routeSetting as keyof Project];
                if (typeof action === 'string' && route.redirect_actions && !route.redirect_actions.includes(action)) {
                    return null;
                }
            }

            /**
             * Find if user has to fill in specific profile information
             */
            if (user[route.client_key as keyof Client] !== false) {
                return null;
            }

            /**
             * That means the user has permission to update and has to do it
             */
            return route.route;
        })
        .filter((route) => route !== null);

    const nextUrl = routes.length > 0 ? routes[0] : null;

    return nextUrl;
};

type ProfileStatus = { verified: boolean; name: string }[];

export const getProfileStatus = (user: Client, project: Project): ProfileStatus => {
    const status: ProfileStatus = [];
    const profileInfoRoutesCases = resolveProfileInfoRoutesCases(project, user);
    let data;
    for (const routeCase of profileInfoRoutesCases) {
        const routeSetting = routeCase.setting;
        data = {
            verified: user[routeCase.client_key as keyof Client] as boolean,
            name: routeCase.text,
        };

        if (routeSetting && routeCase.client_setting && !user[routeCase.client_setting as keyof Client]) {
            status.push({
                verified: true,
                name: routeCase.text,
            });
            continue;
        }
        /**
         * Find if user has permissions to read or write specific profile information
         */
        if (routeSetting && project[routeSetting as keyof Project]) {
            const action: unknown = project[routeSetting as keyof Project];
            if (typeof action === 'string' && ['none', ''].includes(action)) {
                continue;
            }
        }

        status.push(data);
    }

    return status;
};
