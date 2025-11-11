import CheckListIcon from '~/shared/components/icon/CheckList';
import { PortalCompoment } from './PortalComponent';

interface ColumnListProps extends PortalCompoment {
    list: string[];
}

const ColumnList = ({ list }: ColumnListProps) => {
    return (
        <div className="o-column-list">
            {list.map((item) => (
                <div className="o-column-list__item" key={item}>
                    <CheckListIcon />
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ColumnList;
