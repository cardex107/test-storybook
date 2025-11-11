import { uniqueId } from 'lodash';
import { MenuGroupItem } from '~/modules/amos-api/types';
import useAppState from '~/modules/user/shared/hooks/useAppState';
import { useTranslation } from 'react-i18next';
import { generateUrl } from '~/modules/user/shared/utils/url';

const useMenu = () => {
    const {
        i18n: { language: locale },
    } = useTranslation();
    const { menu: data, project, auth } = useAppState();
    const isLoggedIn = Boolean(auth.user);

    const resolveMenu = () => {
        let menuItems = 0;
        const menu = [];

        if (project.navigation_restricted && !auth.user) {
            return [];
        }

        for (const [index, group] of data.entries()) {
            const items = getItemsFromLocale(locale, group.items);
            menuItems = menuItems + items.length;

            if (items.length === 1) {
                menu.push({ ...items[0], contextId: index + 1 });
                continue;
            }

            const localeItem = getLocale(locale, group.locales);

            menu.push({
                name: localeItem?.name ?? '',
                items,
                contextId: index + 1,
            });
        }

        if (menuItems < 2) {
            return [];
        }

        return menu;
    };

    const getItemsFromLocale = (locale: string, items: MenuGroupItem[]) => {
        return items.filter((item) => canAccessToMenuItem(item)).map((item) => resolveLinkFromItem(locale, item));
    };

    const resolveLinkFromItem = (locale: string, item: MenuGroupItem) => {
        const localeItem = getLocale(locale, item.locales);
        const name = localeItem ? localeItem.name : '';
        let link = '';
        let target = '_self';
        const disabled = false;
        let pageName = '';

        switch (item.type) {
            case 'link':
                link = localeItem ? localeItem.link_url : '';
                target = '_blank';
                break;
            case 'page':
                pageName = item.slug ?? '';
                link = `/${pageName}`;
                break;
            case 'service':
                pageName = item.service
                    .replace(/scope\|/g, '')
                    .replace(/\|/g, '-')
                    .replace(/_/g, '-');
                link = `/${pageName}`;
                break;
        }

        if ((item.accessible_only_logged ?? false) && !isLoggedIn) {
            link = generateUrl('/external-authorized-access', {
                page: encodeUrl(link),
            });
            target = '_self';
        }

        return {
            id: uniqueId(),
            name: name,
            link: link,
            target: target,
            disabled: disabled,
            pageName: pageName,
        };
    };

    const canAccessToMenuItem = (item: MenuGroupItem) => {
        if (item.hidden) {
            return false;
        }

        if (isService(item) && !(item.service in project.services)) {
            return false;
        }

        if (item.type === 'service' && project.content_restricted_by_product && isLoggedIn) {
            if (isScope(item)) {
                const scope = extractScope(item);
                return scope && true;
            }

            return true;
        }

        return true;
    };

    const getLocale = <T extends { locale: string }>(locale: string, locales: T[]) => {
        return locales.find((localeItem) => localeItem.locale === locale) ?? null;
    };

    const encodeUrl = (url: string) => {
        return btoa(JSON.stringify({ url }));
    };

    const isScope = (item: MenuGroupItem) => {
        return item.service.startsWith('scope|');
    };

    const extractScope = (item: MenuGroupItem) => {
        return item.service.split('|')[1];
    };

    const isService = (item: MenuGroupItem) => {
        return item.type === 'service' && !isScope(item);
    };

    return resolveMenu();
};

export default useMenu;
