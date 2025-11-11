import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Button from '~/modules/user/shared/components/Button';
import { getCookie, setCookie } from '~/modules/user/shared/utils/cookies';
import { useTranslation } from 'react-i18next';
import useAppState from '~/modules/user/shared/hooks/useAppState';

const ACCEPT_COOKIES_COOKIE_NAME = 'accept-use-cookies';
const ACCEPT_COOKIES_VERSION = 'v1.0';

export default function CookiesBar() {
    const {
        project,
        app: { embeddingConfiguration },
    } = useAppState();
    const [show, setShow] = useState(false);
    const { t } = useTranslation();

    const useCookiePro = project.use_cookie_pro && project.google_tag_manager;

    useEffect(() => {
        setShow(!useCookiePro && getCookie(ACCEPT_COOKIES_COOKIE_NAME) !== ACCEPT_COOKIES_VERSION);
    }, [useCookiePro]);

    const handleClick = () => {
        setCookie(ACCEPT_COOKIES_COOKIE_NAME, ACCEPT_COOKIES_VERSION, 365);
        setShow(false);
    };

    if (!show || embeddingConfiguration.hideCookieAlert || project.use_cookie_pro) {
        return null;
    }

    return (
        <div className="o-cookie-layer o-cookie-layer--white is-visible" data-testid="cookies-bar">
            <p className="o-cookie-layer__text o-cookie-layer--white__text">
                {t('cookies.modal.text')}
                <Link to={'../cookies'} className="o-cookie-layer__link o-cookie-layer--white__link">
                    {t('cookies.modal.more_information')}
                </Link>
            </p>

            <Button
                onClick={handleClick}
                className="o-cookie-layer__button o-cookie-layer--white__button"
                label={t('cookies.modal.accept')}
            />
            <span className="o-cookie-layer__icon a-icon a-icon--black-cookie"></span>
        </div>
    );
}
