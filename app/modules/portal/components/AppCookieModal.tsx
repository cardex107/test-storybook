import { useCallback, useEffect, useState } from 'react';
import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import { getCookie, setCookie } from '~/modules/user/shared/utils/cookies';
import AppButtons from './AppButtons';
import Button from '~/modules/user/shared/components/Button';
import classnames from 'classnames';
import { PortalCompoment } from './PortalComponent';

interface AppCookieModalProps extends PortalCompoment {
    id: string;
    title: string;
    subtitle: string;
    appSideImages?: string[];
    appSideImage?: string;
    className?: string;
}

const AppCookieModal = ({ id, title, subtitle, appSideImages, appSideImage, className }: AppCookieModalProps) => {
    const { sanitizeContent } = useSanitizeContent();
    const [showModal, setShowModal] = useState(false);

    const handleClickClose = useCallback(() => {
        setShowModal(false);
        setCookie(id, 'true', 368);
    }, [id]);

    useEffect(() => {
        const closeModal = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClickClose();
            }
        };

        window.addEventListener('keydown', closeModal);

        const clicked = getCookie(id);
        setShowModal(clicked !== 'true');

        return () => window.removeEventListener('keydown', closeModal);
    }, [handleClickClose, id]);

    if (!showModal) {
        return null;
    }

    return (
        <div className="o-app-modal is-visible">
            <div className={classnames('o-app-modal__box o-app-modal__box--downloadApp', className)}>
                <div className="o-app-modal__app-box">
                    {appSideImage && (
                        <div
                            key={appSideImage}
                            className={'o-app-modal__app-screen'}
                            style={{ backgroundImage: `url("${appSideImage}")` }}
                        >
                            <img
                                className="a-mobile-notch"
                                src="/assets/images/movistar/icons/icon--mobile-notch.svg"
                                alt="mobile screen"
                            />
                        </div>
                    )}
                    {appSideImages &&
                        appSideImages.map((image, index) => (
                            <div
                                key={image}
                                className={classnames('o-app-modal__app-screen', {
                                    'o-app-modal__app-screen--overlap': index === 0,
                                })}
                                style={{ backgroundImage: `url("${image}")` }}
                            >
                                <img
                                    className="a-mobile-notch"
                                    src="/assets/images/movistar/icons/icon--mobile-notch.svg"
                                    alt="mobile screen"
                                />
                            </div>
                        ))}
                </div>
                <div className="o-app-modal__wrapper">
                    <Button onClick={handleClickClose} className="o-base-modal__icon o-app-modal__icon white" />
                    <div className="o-app-modal__content">
                        <p className="o-app-modal__title">{title}</p>
                        {subtitle && (
                            <div className="o-app-modal__text">
                                <p>{sanitizeContent(subtitle)}</p>
                            </div>
                        )}
                        <div>
                            <AppButtons />
                        </div>
                    </div>
                </div>
            </div>
            <div className="o-app-modal__background" onClick={handleClickClose}></div>
        </div>
    );
};

export default AppCookieModal;
