import React from 'react';
import useMenu from '../hooks/useMenu';
import NavLink from '~/shared/components/NavLink';
import { MenuItem } from '~/modules/portal/components/MenuItem';

interface MenuProps {
    menu: ReturnType<typeof useMenu>;
    type: 'desktop' | 'mobile';
    testId?: string;
}

const Menu = ({ menu, type = 'desktop', testId }: MenuProps) => {
    if (!menu.length) {
        return null;
    }

    let menuStyles = {
        menu: 'o-header__nav-list',
        menuTitle: 'o-header__action',
        menuItem: 'o-header__nav-item',
        submenu: 'o-header__submenu m-submenu',
        submenuItem: 'm-submenu__item',
        submenuItemLink: 'm-submenu__item-link',
    };

    if (type === 'mobile') {
        menuStyles = {
            menu: 'm-nav-mobile__nav-list',
            menuTitle: 'm-nav-mobile__action',
            menuItem: 'm-nav-mobile__nav-item',
            submenu: 'm-nav-mobile__submenu',
            submenuItem: 'm-nav-mobile__submenu-item',
            submenuItemLink: 'm-nav-mobile__submenu-item-link',
        };
    }

    return (
        <ul className={menuStyles.menu} data-testid={testId}>
            {menu.map((group) => (
                <React.Fragment key={group.contextId}>
                    {'link' in group && (
                        <li className={menuStyles.menuItem} data-testid="menu-group">
                            <NavLink
                                className={({ isActive }) => `${menuStyles.menuTitle} ${isActive ? 'is-active' : ''}`}
                                to={group.link}
                                target={group.target}
                                data-pagename={group.pageName}
                            >
                                {group.name}
                            </NavLink>
                        </li>
                    )}
                    {group.items && group.items.length > 0 && (
                        <MenuItem
                            name={group.name}
                            items={group.items}
                            className={menuStyles.menuItem}
                            titleClassName={menuStyles.menuTitle}
                            submenuClassName={menuStyles.submenu}
                            submenuItemClassName={menuStyles.submenuItem}
                            submenuItemLinkClassName={menuStyles.submenuItemLink}
                            collapsible={type === 'mobile'}
                        />
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default Menu;
