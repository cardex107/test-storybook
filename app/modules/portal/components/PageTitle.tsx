import classnames from 'classnames';
import CmsContent from './CmsContent';
import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import { PortalCompoment } from './PortalComponent';

interface PageTitleProps extends PortalCompoment {
    title: string;
    subtitle?: string;
    styleType?: 'reduced';
    className?: string;
}

const PageTitle = ({ title, subtitle, styleType, className }: PageTitleProps) => {
    const { sanitizeContent } = useSanitizeContent();
    return (
        <div className={classnames(className, 'm-page-title', { 'm-page-title--reduced': styleType === 'reduced' })}>
            <div className="m-page-title__inner">
                <h1 className="m-page-title__title">{sanitizeContent(title)}</h1>
                {subtitle && <CmsContent content={subtitle} />}
            </div>
        </div>
    );
};

export default PageTitle;
