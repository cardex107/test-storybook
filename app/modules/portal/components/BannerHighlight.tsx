import { PortalCompoment } from "./PortalComponent";

interface BannerHighlightProps extends PortalCompoment {
    image: string;
    imageAlt?: string;
    title: string;
    content: string;
    showServiceButtons: boolean;
}
const BannerHighlight = ({ image, title, content, showServiceButtons, imageAlt }: BannerHighlightProps) => {
    return (
        <div className="o-banner-highlight" id="who-can-use">
            <img src={image} className="o-banner-highlight__image" alt={imageAlt} />
            <div className="o-banner-highlight__wrapper">
                <div className="o-banner-highlight__text-wrapper">
                    <h3 className="o-banner-highlight__title">{title}</h3>
                    <div className="o-banner-highlight__text">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default BannerHighlight;
