import CmsContent from './CmsContent';
import { PortalCompoment } from './PortalComponent';

interface CmsContentBlockProps extends PortalCompoment {
    content: string;
    styleType?: React.ComponentProps<typeof CmsContent>['styleType'];
}

const CmsContentBlock = ({ content, styleType = 'default' }: CmsContentBlockProps) => {
    return (
        <div className="o-cms-content-block">
            <CmsContent content={content} styleType={styleType} />
        </div>
    );
};

export default CmsContentBlock;
