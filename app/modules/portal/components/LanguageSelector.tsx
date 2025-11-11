import { Link, useLocation } from '@remix-run/react';
import classnames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useAppState from '~/modules/user/shared/hooks/useAppState';
import useFieldFormatters from '~/modules/user/shared/hooks/useFieldFormatters';
import SimpleCheckIcon from '~/shared/components/icon/SimpleCheck';
import WorldIcon from '~/shared/components/icon/World';

type RouteType = any;

interface LanguageSelectorProps {
    className?: string;
    styleType?: 'desktop' | 'mobile';
    testId?: string;
}

function replaceLocale(pathname: string, newLocale: string) {
    const localeRegex = /^\/([a-z]{2}-[A-Z]{2})(\/|$)/;

    if (localeRegex.test(pathname)) {
        return pathname.replace(localeRegex, `/${newLocale}$2`);
    } else {
        return `/${newLocale}`;
    }
}

const resolveLocalizedUrl = (pathname: string, locale: string, routeType: RouteType) => {
    if (routeType.type === 'domain') {
        return `${replaceLocale(pathname, locale)}?language=${locale}`;
    }

    if (routeType.type === 'app') {
        const segments = pathname.split('/');
        segments[2] = locale;
        return segments.join('/');
    }

    return `?language=${locale}`;
};

const LanguageSelector = ({ className, styleType = 'desktop', testId }: LanguageSelectorProps) => {
    const [open, setOpen] = useState(false);
    const { formatLocale } = useFieldFormatters();
    const { pathname } = useLocation();

    const {
        i18n: { language: locale },
    } = useTranslation();
    const {
        project,
        app: { embeddingConfiguration, routeType },
    } = useAppState();

    if (embeddingConfiguration.hideLanguages || project.contentLocales.length < 2) {
        return null;
    }

    return (
        <div className={classnames('m-lang-selector', className, { 'is-open': open })} data-testid={testId}>
            <span
                className={classnames('m-lang-selector__action', {
                    'm-lang-selector__action--navigation': styleType === 'mobile',
                })}
                onClick={() => setOpen(!open)}
            >
                <WorldIcon className="m-lang-selector__icon" />
                {formatLocale(locale)}
                <div className="h-space-separator"></div>
                <span className="a-dropdown__arrow"></span>
            </span>
            <div
                className={classnames('m-lang-selector__wrapper', {
                    'm-lang-selector__wrapper--navigation': styleType === 'mobile',
                })}
            >
                <ul
                    className={classnames('m-lang-selector__list', {
                        'm-lang-selector__list--navigation': styleType === 'mobile',
                        'h-block': open,
                    })}
                >
                    {project.contentLocales.map((lang) => (
                        <li key={lang} className={`m-lang-selector__item ${lang === locale ? 'is-active' : ''}`}>
                            <SimpleCheckIcon className="m-lang-selector__icon-check" />
                            <Link
                                className="m-lang-selector__link"
                                to={resolveLocalizedUrl(pathname, lang, routeType)}
                                onClick={() => setOpen(false)}
                            >
                                {formatLocale(lang)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LanguageSelector;
