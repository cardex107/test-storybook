import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';import { PortalCompoment } from './PortalComponent';
;

const styles = {
    default: 's-cms-content',
    padded: 's-cms-content s-cms-content--padded',
    white: 's-cms-content s-cms-content--white',
    big: 's-cms-content s-cms-content--big',
};

interface CmsContentProps extends PortalCompoment {
    content: string | string[];
    styleType?: keyof typeof styles;
}

const CmsContent = ({ content, styleType = 'default' }: CmsContentProps) => {
    const { sanitizeContent } = useSanitizeContent();
    let actualContent = Array.isArray(content) ? content.filter(Boolean).join(' ') : content;
    actualContent = actualContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return <div className={styles[styleType] ?? ''}>{sanitizeContent(actualContent)}</div>;
};

export default CmsContent;
