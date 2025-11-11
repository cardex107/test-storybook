import CmsContent from './CmsContent';
import { PortalCompoment } from './PortalComponent';

interface TextImageBlockProps extends PortalCompoment {
    title: string;
    image: string;
    content: string;
}

const TextImageBlock = ({ title, image, content }: TextImageBlockProps) => {
    return (
        <div className="o-text-image-block">
            <div className="o-text-image-block__image" style={{ backgroundImage: `url("${image}")` }}></div>
            <div className="o-text-image-block__text-panel">
                <h2 className="o-text-image-block__title">{title}</h2>
                <CmsContent content={content} styleType="white" key="" />
            </div>
        </div>
    );
};

export default TextImageBlock;
