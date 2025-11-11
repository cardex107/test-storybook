import classnames from 'classnames';
import { QrCode } from '~/modules/user/shared/components/QrCode';
import useProject from '~/modules/user/shared/hooks/useProject';
import { useTranslation } from 'react-i18next';

interface AppButtonsProps {
    title?: string;
}

const AppButtons = ({ title }: AppButtonsProps) => {
    const {
        i18n: { language: locale },
    } = useTranslation();
    const localeIso = locale.split('-')[0];
    const project = useProject();
    const buttons = [
        {
            link: project.settings_android_vsee_app,
            image: `/images/common/google-play-${localeIso}.svg`,
            className: 'm-download-button-google',
        },
        {
            link: project.settings_ios_vsee_app,
            image: `/images/common/app-store-${localeIso}.svg`,
            className: 'm-download-button-apple',
        },
    ];

    const actualButtons = buttons.filter((button) => Boolean(button.link));

    if (actualButtons.length === 0) {
        return null;
    }

    return (
        <>
            {title && <h3 className="m-download-buttons-title">{title}</h3>}
            <div className="m-download-buttons-cont m-download-buttons-cont-centered-md">
                {actualButtons.map((button) => (
                    <div key={button.image} className={classnames('m-download-button', button.className)}>
                        <a href={button.link} className="m-download-button__link">
                            <img src={button.image} alt="" />
                        </a>
                        <QrCode url={button.link} className="m-download-button__qr" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default AppButtons;
