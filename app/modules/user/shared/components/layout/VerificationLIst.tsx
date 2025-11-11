import classnames from 'classnames';

export interface VerificationListProps {
    listItemClassname?: string;
    items: {
        verified: boolean;
        text: string;
    }[];
    title?: string;
}

const VerificationList = ({ title, listItemClassname, items }: VerificationListProps) => {
    if (items.length === 0) return null;

    return (
        <div
            className="o-message-block__text-block o-message-block__text-block--lines h-text-center"
            data-testid={'profile-status'}
        >
            {title && <div className={'a-paragraph-bold'}>{title}</div>}

            {items.map((item) => (
                <div
                    key={item.text}
                    className={classnames('m-verify-items', listItemClassname, {
                        verified: item.verified,
                    })}
                >
                    {item.text}{' '}
                </div>
            ))}
        </div>
    );
};

export default VerificationList;
