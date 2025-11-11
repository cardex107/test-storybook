import { createCookie } from '@remix-run/node';
import { resolveCookieDomain } from '~/modules/user/shared/utils/cookies';

export type EmbeddingConfiguration = {
    hideCookieAlert: boolean;
    hideScroll: boolean;
    hideTopBar: boolean;
    hideLogo: boolean;
    hideLoginButton: boolean;
    hideLogoutButton: boolean;
    hideLanguages: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
    hideBackButton: boolean;
    hideContinueButton: boolean;
};

export const defaultEmbeddingConfiguration = {
    hideCookieAlert: false,
    hideScroll: false,
    hideTopBar: false,
    hideLogo: false,
    hideLoginButton: false,
    hideLogoutButton: false,
    hideLanguages: false,
    hideHeader: false,
    hideFooter: false,
};

export const createEmbeddingConfigCookie = (request: Request) => {
    const url = new URL(request.url);
    const domain = resolveCookieDomain(url.host);

    return createCookie('embedding-config', {
        maxAge: 86400 * 30, // 30 days
        sameSite: 'none',
        httpOnly: true,
        secure: true,
        partitioned: true,
        domain,
    });
};

const paramsMap: Record<string, string> = {
    hide_cookie_alert: 'hideCookieAlert',
    hide_scroll: 'hideScroll',
    hide_top_bar: 'hideTopBar',
    hide_logo: 'hideLogo',
    hide_login_button: 'hideLoginButton',
    hide_logout_button: 'hideLogoutButton',
    hide_languages: 'hideLanguages',
    hide_header: 'hideHeader',
    hide_footer: 'hideFooter',
    hide_back_button: 'hideBackButton',
    hide_continue_button: 'hideContinueButton',
};

const resolveConfig = (searchParams: URLSearchParams, key: string, sessionConfig: EmbeddingConfiguration) => {
    const config = searchParams.get(key) ?? sessionConfig[paramsMap[key] as keyof EmbeddingConfiguration];
    return config === 'y' || config === true;
};

export const extractEmbeddingConfiguration = async (request: Request): Promise<EmbeddingConfiguration> => {
    const cookie = createEmbeddingConfigCookie(request);
    const sessionConfig = (await cookie.parse(request.headers.get('Cookie'))) ?? {};
    const url = new URL(request.url);
    const embedMode = url.searchParams.get('embed_mode') === 'y';
    const hideNavigation = url.searchParams.get('hide_navigation') === 'y';

    return {
        hideCookieAlert: resolveConfig(url.searchParams, 'hide_cookie_alert', sessionConfig) || embedMode,
        hideScroll: resolveConfig(url.searchParams, 'hide_scroll', sessionConfig) || embedMode,
        hideTopBar: resolveConfig(url.searchParams, 'hide_top_bar', sessionConfig) || embedMode,
        hideLogo: resolveConfig(url.searchParams, 'hide_logo', sessionConfig) || embedMode,
        hideLoginButton: resolveConfig(url.searchParams, 'hide_login_button', sessionConfig) || embedMode,
        hideLogoutButton: resolveConfig(url.searchParams, 'hide_logout_button', sessionConfig) || embedMode,
        hideLanguages: resolveConfig(url.searchParams, 'hide_languages', sessionConfig) || embedMode,
        hideHeader: resolveConfig(url.searchParams, 'hide_header', sessionConfig) || embedMode || hideNavigation,
        hideFooter: resolveConfig(url.searchParams, 'hide_footer', sessionConfig) || embedMode || hideNavigation,
        hideBackButton:
            resolveConfig(url.searchParams, 'hide_back_button', sessionConfig) || embedMode || hideNavigation,
        hideContinueButton:
            resolveConfig(url.searchParams, 'hide_continue_button', sessionConfig) || embedMode || hideNavigation,
    };
};
