import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import IconLink from './IconLink';
import AppButtons from './AppButtons';
import { PortalCompoment } from './PortalComponent';

interface BottomBannerProps extends PortalCompoment {
    title?: string;
    content?: string | string[];
    list?: string[];
    buttons?: {
        text: string;
        target: string;
        link: string;
        icon: string;
        iconPosition?: 'left' | 'right';
    }[];
    showServiceButtons: boolean;
    showAppButtons: boolean;
    note?: string;
}

const BottomBanner = ({
    title,
    content,
    list,
    buttons,
    showServiceButtons,
    showAppButtons,
    note,
}: BottomBannerProps) => {
    const actualList = list ? list.filter(Boolean) : [];
    const { sanitizeContent } = useSanitizeContent();
    return (
        <div className="o-bottom-banner">
            {title && <p className="o-bottom-banner__title">{sanitizeContent(title)}</p>}

            {content && !Array.isArray(content) && (
                <div className="o-bottom-banner__text">{sanitizeContent(content)}</div>
            )}

            {content &&
                Array.isArray(content) &&
                content.map((item) => (
                    <div className="o-bottom-banner__text" key={item}>
                        {sanitizeContent(item)}
                    </div>
                ))}

            {actualList.length > 0 && (
                <ul className="o-bottom-banner__list">
                    {actualList.map((item, index) => (
                        <li key={index + 1} className="o-bottom-banner__list-item">
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {buttons && (
                <div className="o-bottom-banner__buttons-wrapper">
                    {buttons.map((button) => (
                        <IconLink
                            key={button.link}
                            to={button.link}
                            text={button.text}
                            icon={button.icon}
                            iconPosition={button.iconPosition}
                            className="o-bottom-banner__button"
                            styleType="white"
                        />
                    ))}
                </div>
            )}

            {showAppButtons && <AppButtons />}

            {note && <div className="o-bottom-banner__text">{sanitizeContent(note)}</div>}
        </div>
    );
};

export default BottomBanner;
