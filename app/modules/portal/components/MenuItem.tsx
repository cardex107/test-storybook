import NavLink from '~/shared/components/NavLink';
import React from 'react';
import classnames from 'classnames';

export interface CollapsibleMenuItemProps {
    className?: string;
    titleClassName?: string;
    submenuClassName?: string;
    submenuItemClassName?: string;
    submenuItemLinkClassName?: string;
    name: string;
    items: any[];
    collapsible?: boolean;
}

export const MenuItem = ({
    className,
    submenuClassName,
    titleClassName,
    submenuItemLinkClassName,
    submenuItemClassName,
    name,
    items,
    collapsible = false,
}: CollapsibleMenuItemProps) => {
    const [visible, setVisible] = React.useState(!collapsible);

    return (
        <li className={className} data-testid="menu-group">
            <span
                className={`${titleClassName} ${visible ? 'is-open' : ''}`}
                onClick={() => collapsible && setVisible(!visible)}
            >
                {name}
                <span className="a-dropdown__arrow"></span>
            </span>
            <ul
                className={classnames(submenuClassName, {
                    'h-hidden': collapsible && !visible,
                    'h-block': collapsible && visible,
                })}
            >
                {items.map(
                    (item) =>
                        !item.disabled && (
                            <li className={submenuItemClassName} key={item.id}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${submenuItemLinkClassName} ${isActive ? 'is-active' : ''}`
                                    }
                                    to={item.link}
                                    target={item.target}
                                    data-pagename={item.pageName}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                )}
            </ul>
        </li>
    );
};
