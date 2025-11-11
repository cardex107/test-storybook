import AppButtons from './AppButtons';
import { PortalCompoment } from './PortalComponent';

interface AppPromotionBlockProps extends PortalCompoment {
    image?: string;
    title: string;
    content: string;
}

const AppPromotionBlock = ({ image, title, content }: AppPromotionBlockProps) => {
    if (!image) {
        return null;
    }

    return (
        <div className="o-app-block">
            <div className="o-app-block__text-wrapper">
                <span className="o-app-block__small-text">{title}</span>
                <span className="o-app-block__text">{content}</span>
                <AppButtons />
            </div>
            <div className="o-app-block__app-screen" style={{ backgroundImage: `url("${image}")` }}>
                <img
                    className="a-mobile-notch"
                    src="/assets/images/movistar/icons/icon--mobile-notch.svg"
                    alt="mobile screen"
                />
            </div>
        </div>
    );
};

export default AppPromotionBlock;
