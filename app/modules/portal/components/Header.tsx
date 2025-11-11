import { Link, useLocation } from '@remix-run/react';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useAppState from '~/modules/user/shared/hooks/useAppState';
import PersonIcon from '~/shared/components/icon/Person';
import useMenu from '../hooks/useMenu';
import ContactInfo from './ContactInfo';
import LanguageSelector from './LanguageSelector';
import Menu from './Menu';
import ProfileMenu from './ProfileMenu';
import AlertBar from './TopAlertBar';
import { getTemplate } from '~/shared/application/project';

export default function Header() {
    const [headerClassName, setHeaderClassName] = useState('');
    const { t } = useTranslation();
    const menu = useMenu();
    const {
        app: { baseUrl, homeUrl, signUpUrl, embeddingConfiguration },
        auth,
        project,
    } = useAppState();
    const headerRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();

    const handleClickMenu = (type: string) => {
        setHeaderClassName((prev) => (prev === `has-${type}-open` ? '' : `has-${type}-open`));
    };

    useEffect(() => {
        if (!headerClassName) {
            document.body.classList.remove('has-scroll-blocked');
        } else {
            document.body.classList.add('has-scroll-blocked');
        }
    }, [headerClassName]);

    useEffect(() => {
        const shrinkHeader = () => {
            if (!headerRef.current) {
                return;
            }

            const scrollPosition = window.scrollY;
            const scrolledClass = 'o-header--pinned';
            const isScrolled = headerRef.current.classList.contains(scrolledClass);

            if (scrollPosition > headerRef.current.offsetHeight && !isScrolled) {
                headerRef.current.classList.add(scrolledClass);
                return;
            }

            if (scrollPosition <= headerRef.current.offsetHeight && isScrolled) {
                headerRef.current.classList.remove(scrolledClass);
            }
        };

        window.addEventListener('scroll', shrinkHeader);

        return () => window.removeEventListener('scroll', shrinkHeader);
    });

    useEffect(() => {
        setHeaderClassName('');
        document.body.classList.remove('has-scroll-blocked');
    }, [pathname]);

    const template = getTemplate(project);
    const isLoggedIn = Boolean(auth.user);
    const showSignupButton = project.allow_create_clients && ['movistar', 'vfz'].includes(template.name);
    const hasTopInfo =
        project.contact_home_email || project.contact_phone || t('header.toplink.url', { defaultValue: '' });
    const hasAlert = t('header.alert.text', { defaultValue: '' }) || t('header.alert.url', { defaultValue: '' });
    const showBurgerIcon = menu.length || hasTopInfo || project.contentLocales.length > 1;
    const hideTopBar = embeddingConfiguration.hideTopBar || ['movistar'].includes(template.name);

    const LanguageSelectorClassName =
        menu.length || hasTopInfo
            ? 'm-lang-selector--navigation'
            : 'm-lang-selector--navigation m-lang-selector--visible';

    return (
        <>
            {hasAlert && (
                <AlertBar
                    message={t('header.alert.text')}
                    link={t('header.alert.url')}
                    linkLabel={t('header.alert.textLink')}
                />
            )}
            {!hideTopBar && (
                <div className="o-top-bar">
                    {hasTopInfo && (
                        <ContactInfo
                            link={t('header.toplink.url')}
                            linkLabel={t('header.toplink.text')}
                            email={project.contact_home_email}
                            phone={project.contact_phone}
                        />
                    )}
                    <LanguageSelector testId="desktop-language-selector" />
                </div>
            )}
            {!embeddingConfiguration.hideHeader && (
                <header id="header" className={classnames('o-header', headerClassName)} ref={headerRef}>
                    <div className="o-header__backdrop--nav" onClick={() => handleClickMenu('nav')}></div>
                    <div className="o-header__backdrop--account" onClick={() => handleClickMenu('account')}></div>
                    <div className="o-header__inner">
                        {showBurgerIcon && (
                            <div className="o-header__icon-menu" onClick={() => handleClickMenu('nav')}>
                                <span className="o-header__icon-line"></span>
                            </div>
                        )}
                        {!embeddingConfiguration.hideLogo && (
                            <a className="o-header__home-link" href={homeUrl}>
                                <img
                                    className="o-header__logo"
                                    src={
                                        project.resources.logos.header ??
                                        'https://via.placeholder.com/100?text=Demo%20image'
                                    }
                                    alt={t('project.logo_title')}
                                />
                            </a>
                        )}
                        <nav className="o-header__nav">
                            <Menu type="desktop" menu={menu} testId="desktop-menu" />

                            {isLoggedIn && (
                                <>
                                    <Link
                                        className="a-button a-button--outlined o-header__consultations-button"
                                        to={`${baseUrl}/user/consultations`}
                                    >
                                        {t('menu.consultations')}
                                    </Link>
                                    {project.show_account_menu && (
                                        <div className="o-header__account" onClick={() => handleClickMenu('account')}>
                                            <span className="o-header__account-action">
                                                <PersonIcon className="o-header__account-icon" />
                                                <span className="a-dropdown__arrow"></span>
                                            </span>
                                            <ProfileMenu />
                                        </div>
                                    )}
                                </>
                            )}

                            {!isLoggedIn && showSignupButton && (
                                <Link to={signUpUrl ?? `${baseUrl}/signup/user`} className="o-header__button a-button">
                                    {t('register.action')}
                                </Link>
                            )}

                            {!embeddingConfiguration.hideLoginButton && !isLoggedIn && (
                                <Link to={`${baseUrl}/login`} className="o-header__button a-button">
                                    {t('menu.login')}
                                </Link>
                            )}
                        </nav>

                        <div className="o-header__side-menus">
                            <nav className="o-header__nav-mobile m-nav-mobile ">
                                <div className="m-nav-mobile__top-wrapper">
                                    <ContactInfo
                                        email={project.contact_home_email}
                                        link={t('header.toplink.url', { defaultValue: '' })}
                                        linkLabel={t('header.toplink.text', { defaultValue: '' })}
                                        phone={project.contact_phone}
                                    />
                                </div>
                                <Menu type="mobile" menu={menu} testId="mobile-menu" />
                                <LanguageSelector
                                    styleType="mobile"
                                    className={LanguageSelectorClassName}
                                    testId="mobile-language-selector"
                                />
                            </nav>
                            {isLoggedIn && (
                                <nav
                                    className="o-header__account-mobile m-account-mobile"
                                    onClick={() => handleClickMenu('account')}
                                >
                                    <Link
                                        className="a-button a-button--outlined m-account-mobile__consultations-button"
                                        to={`${baseUrl}/user/consultations`}
                                    >
                                        {t('menu.consultations')}
                                    </Link>
                                    {project.show_account_menu && (
                                        <>
                                            <span className="m-account-mobile__title">{t('menu.personalarea')}</span>
                                            <ProfileMenu type="mobile" />
                                        </>
                                    )}
                                </nav>
                            )}
                            {!embeddingConfiguration.hideLoginButton && !isLoggedIn && (
                                <Link to={`${baseUrl}/login`} className="m-account-mobile__login-button a-button  ">
                                    <span className="a-button__left-icon a-icon h-icon--login "></span>
                                    {t('menu.login')}
                                </Link>
                            )}
                        </div>
                    </div>
                </header>
            )}
        </>
    );
}
