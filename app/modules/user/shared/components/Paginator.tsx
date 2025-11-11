import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import FirstPageIcon from './icon/FirstPage';
import LastPageIcon from './icon/LastPage';
import NextPageIcon from './icon/NextPage';
import PreviousPageIcon from './icon/PreviousPage';

interface PaginationProps {
    page: number;
    totalItems: number;
    itemsPerPage: number;
    className: string;
    onClickPage: (page: number) => void;
}

const Paginator = ({ page, totalItems, itemsPerPage, className, onClickPage }: PaginationProps) => {
    const { t } = useTranslation();
    const start = itemsPerPage * (page - 1) + 1;
    const end = start + itemsPerPage > totalItems ? totalItems : start + itemsPerPage;
    const lastPage = Math.ceil(totalItems / itemsPerPage);

    if (itemsPerPage >= totalItems) {
        return null;
    }

    return (
        <div className={`m-paginator ${className}`}>
            <div className="m-paginator__counter">
                <span className="m-paginator__number">
                    {t('common.pagination', {
                        first_item: String(start),
                        last_item: String(end),
                        total_items: String(totalItems),
                    })}
                </span>
                <a
                    className={classnames('m-paginator__button', {
                        'is-disabled': page <= 1,
                        'svg-fill-grey-6': page <= 1,
                    })}
                    onClick={() => page > 1 && onClickPage(1)}
                >
                    <FirstPageIcon />
                </a>
                <a
                    className={classnames('m-paginator__button', {
                        'is-disabled': page <= 1,
                        'svg-fill-grey-6': page <= 1,
                    })}
                    onClick={() => page > 1 && onClickPage(page - 1)}
                >
                    <PreviousPageIcon />
                </a>
                <a
                    className={classnames('m-paginator__button', {
                        'is-disabled': page >= lastPage,
                        'svg-fill-grey-6': page >= lastPage,
                    })}
                    onClick={() => page < lastPage && onClickPage(page + 1)}
                >
                    <NextPageIcon />
                </a>
                <a
                    className={classnames('m-paginator__button', {
                        'is-disabled': page >= lastPage,
                        'svg-fill-grey-6': page >= lastPage,
                    })}
                    onClick={() => page < lastPage && onClickPage(lastPage)}
                >
                    <LastPageIcon />
                </a>
            </div>
        </div>
    );
};

export default Paginator;
