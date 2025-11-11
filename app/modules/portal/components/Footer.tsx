import { formatDate } from 'date-fns';
import useAppState from '~/modules/user/shared/hooks/useAppState';
import { useTranslation } from 'react-i18next';
import useMenuConsents from '../hooks/useMenuConsents';
import Link from '~/shared/components/Link';

export default function Footer() {
    const { t } = useTranslation();
    const {
        app: { embeddingConfiguration, baseUrl },
        project,
    } = useAppState();
    const consents = useMenuConsents();

    if (embeddingConfiguration.hideFooter) {
        return null;
    }

    return (
        <footer className="o-footer">
            <div className="o-footer__top">
                {project.resources.logos.footerServiceLogo && (
                    <div className="o-footer__logo-wrapper o-footer__logo-wrapper--right">
                        <img className="o-footer__logo" src={project.resources.logos.footerServiceLogo} alt="" />
                    </div>
                )}

                <p className="o-footer__disclaimer">{t('footer.legal_text')}</p>
            </div>
            <div className="o-footer__bottom">
                <span className="o-footer__copyright">
                    <span>&copy; </span>
                    {t('project.rights_text', { year: formatDate(new Date(), 'yyyy') })}
                </span>
                <nav className="o-footer__navigation">
                    <ul className="o-footer__links">
                        {consents.map((consent) => (
                            <li className="o-footer__links-item" key={consent.documentType}>
                                <Link className="o-footer__links-anchor" to={consent.link} target={consent.linkTarget}>
                                    {consent.title}
                                </Link>
                            </li>
                        ))}
                        <li className="o-footer__links-item">
                            {/**
                             * Keep this link as an anchor because we need to force a reload page in the cookies page
                             * The cookie page contains cookie pro place holder that need to be page fully reloaded to work
                             * properly
                             * */}
                            <a className="o-footer__links-anchor" href={`${baseUrl}/cookies`}>
                                {t('cookies.title')}
                            </a>
                        </li>

                        {project.use_cookie_pro && project.google_tag_manager && (
                            <li className="o-footer__links-item">
                                <button id="ot-sdk-btn" className="ot-sdk-show-settings o-footer__links-anchor">
                                    Cookie settings
                                </button>
                            </li>
                        )}

                        {project.use_faqs && (
                            <li className="o-footer__links-item">
                                <Link className="o-footer__links-anchor" to="/faqs">
                                    FAQs
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
