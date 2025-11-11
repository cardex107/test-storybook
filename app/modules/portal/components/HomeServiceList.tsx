import ListItemsBlock from './ListItemsBlock';
import useHomeBlocks from '../hooks/useHomeBlocks';

const HomeServiceList = () => {
    const getContentBlocks = useHomeBlocks();
    const blocks = getContentBlocks();
    return <ListItemsBlock blocks={blocks} />;
};

export default HomeServiceList;
