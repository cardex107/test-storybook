import classnames from 'classnames';
import React, { createContext, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import TabComponent from './TabComponent';
import { useNavigate } from '@remix-run/react';

export type Tab = {
    key: string;
    label: string;
};

interface TabsContextProps {
    selectedTab: string | null;
}

interface TabsProps {
    tabs: Tab[];
    children: React.FunctionComponentElement<TabComponent> | React.FunctionComponentElement<TabComponent>[];
    redirect?: boolean;
}

export const TabsContext = createContext<TabsContextProps>({
    selectedTab: null,
});

const Tabs = ({ tabs, children, redirect }: TabsProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();

    const [selectedTab, setSelectedTab] = useState<string | null>(searchParams.get('tab'));

    const actualSelectedTab = redirect ? (tabs.find((tab) => pathname.includes(tab.key))?.key ?? null) : selectedTab;

    const handleClickTab = (tab: Tab) => {
        if (redirect) {
            navigate(pathname.replace(`/${actualSelectedTab}`, `/${tab.key}`));
        }
        setSelectedTab(tab.key);
    };

    return (
        <>
            <div className="o-tabs ">
                <ul className="o-tabs__tabs-list">
                    {tabs.map((tab: Tab) => {
                        return (
                            <li
                                className={classnames('o-tabs__tabs-item', {
                                    'is-active': actualSelectedTab === tab.key,
                                })}
                                key={tab.key}
                                onClick={() => handleClickTab(tab)}
                            >
                                <span className="o-tabs__tabs-text">{tab.label}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <TabsContext.Provider value={{ selectedTab: actualSelectedTab }}>{children}</TabsContext.Provider>
        </>
    );
};

export default Tabs;
