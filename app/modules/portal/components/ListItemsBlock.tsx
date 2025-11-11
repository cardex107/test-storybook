import classnames from 'classnames';
import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import Link from '~/shared/components/Link';
import { PortalCompoment } from './PortalComponent';

interface ListItemsBlockProps extends PortalCompoment {
    blocks: {
        title?: string;
        content: string;
        image: string;
        titleClassName?: string;
        links?: { link: string; text: string; disabled?: boolean }[];
    }[];
    reversed?: boolean;
}

const ListItemsBlock = ({ blocks, reversed }: ListItemsBlockProps) => {
    const { sanitizeContent } = useSanitizeContent();
    return (
        <div className="o-list-item-block">
            <div className="o-list-item-block__inner">
                {blocks.map((block, index) => (
                    <div
                        key={`${index}_${block.title}`}
                        className={classnames('o-list-item-block__item', 'm-list-item-a', {
                            'm-list-item-a--reversed': reversed,
                        })}
                    >
                        <div className="m-list-item-a__image--wrapper">
                            <img className="m-list-item-a__image" src={block.image} alt="" />
                        </div>
                        <div className="m-list-item-a__text-panel">
                            {block.title && (
                                <h2 className={classnames('m-list-item-a__title', block.titleClassName)}>
                                    {block.title}
                                </h2>
                            )}
                            <div className="s-cms-content">{sanitizeContent(block.content)}</div>
                            {block.links && block.links.length > 0 && (
                                <div className="m-list-item-a__links-list">
                                    {block.links.map((link) => {
                                        return link.disabled ? null : (
                                            <Link className="m-list-item-a__link" to={link.link} key={link.text}>
                                                <span className="m-list-item-a__link-icon"></span>
                                                <span className="m-list-item-a__link-text">{link.text}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListItemsBlock;
