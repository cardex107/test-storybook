import classnames from 'classnames';
import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import AppButtons from './AppButtons';
import IconLink from './IconLink';
import { PortalCompoment } from './PortalComponent';

interface HeroBlockProps extends PortalCompoment {
    title: string;
    subtitle?: string;
    image?: string;
    buttons?: {
        link: string;
        text: string;
        icon: string;
    }[];
    showServiceButtons?: boolean;
    showAppButtons?: boolean;
    styleType?: 'default' | 'service' | 'app';
    appButtonsTitle?: string;
}

const HeroBlock = ({
    title,
    subtitle,
    image,
    buttons,
    showServiceButtons,
    showAppButtons,
    styleType = 'default',
    appButtonsTitle,
}: HeroBlockProps) => {
    const { sanitizeContent } = useSanitizeContent();
    let styles = {
        wrapper: 'o-hero-block--home',
        background: '',
        title: '',
        subtitle: '',
        textWrapper: '',
        velum: '',
    };

    if (styleType === 'service') {
        styles = {
            wrapper: 'o-hero-block--service',
            background: 'o-hero-block__background--service',
            title: 'o-hero-block__title--service',
            textWrapper: 'o-hero-block__text-panel--service',
            velum: 'o-hero-block__velum--service',
            subtitle: '',
        };
    }

    if (styleType === 'app') {
        styles = {
            wrapper: 'o-hero-block--app',
            textWrapper: 'o-hero-block__text-panel--app',
            subtitle: 'o-hero-block__subtitle--app',
            background: 'o-hero-block__background-top-right',
            title: '',
            velum: '',
        };
    }

    return (
        <div className={classnames('o-hero-block', styles.wrapper)}>
            <div
                className={classnames('o-hero-block__background', styles.background)}
                style={{ backgroundImage: `url("${image ?? ''}")` }}
            ></div>
            <div className={classnames('o-hero-block__text-panel', styles.textWrapper)}>
                <div className="o-hero-block__text-panel-inner">
                    {title && (
                        <h1 className={classnames('o-hero-block__title', styles.title)}>{sanitizeContent(title)}</h1>
                    )}
                    {subtitle && (
                        <h2 className={classnames('o-hero-block__subtitle', styles.subtitle)}>
                            {sanitizeContent(subtitle)}
                        </h2>
                    )}
                    <div className="o-hero-block__button-wrapper">
                        {buttons &&
                            buttons.map((button) => (
                                <IconLink
                                    key={button.link}
                                    to={button.link}
                                    text={button.text}
                                    icon={button.icon}
                                    className="o-hero-block__button"
                                />
                            ))}
                    </div>
                    {showAppButtons && <AppButtons title={appButtonsTitle} />}
                </div>
            </div>
            <div className={classnames('o-hero-block__velum', styles.velum)}></div>
        </div>
    );
};

export default HeroBlock;
