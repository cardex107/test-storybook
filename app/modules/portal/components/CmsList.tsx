import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import { PortalCompoment } from './PortalComponent';

interface CmsListProps extends PortalCompoment {
    list?: string[];
    title?: string;
    subtitle?: string;
    featured?: string;
}

/**
 *
 * PLEASE PROMISE ME TO KILL THIS SHITTY COMPOMENT
 */

const CmsList = ({ list, title, subtitle, featured }: CmsListProps) => {
    const { sanitizeContent } = useSanitizeContent();
    return (
        <div className="o-cms-list-responsive">
            {title && sanitizeContent(title, { className: 'o-cms-list-responsive__text', wrapperTag: 'div' })}
            {subtitle && sanitizeContent(subtitle, { className: 'o-cms-list-responsive__text', wrapperTag: 'div' })}

            {list && (
                <ul className="o-cms-list-responsive__list">
                    {list.map((item) => (
                        <li key={item}>{sanitizeContent(item)}</li>
                    ))}
                </ul>
            )}

            {featured && <strong className="o-cms-list-responsive__featured">{featured}</strong>}
        </div>
    );
};

export default CmsList;
