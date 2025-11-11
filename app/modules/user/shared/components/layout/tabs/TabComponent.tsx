import React, { useContext } from 'react';
import { TabsContext } from './Tabs';

interface TabComponent {
    id: string;
    children: React.ReactNode;
    render?: boolean;
}

const TabComponent = ({ id, children, render = true }: TabComponent) => {
    const { selectedTab } = useContext(TabsContext);
    const selected = id === selectedTab;
    const renderChildren = render || (!render && selected);

    return (
        <div className="o-tabs-wrapper" style={{ display: selected ? 'flex' : 'none' }}>
            {renderChildren && children}
        </div>
    );
};

export default TabComponent;
