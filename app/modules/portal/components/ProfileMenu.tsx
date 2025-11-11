import { NavLink } from '@remix-run/react';
import Button from '~/modules/user/shared/components/Button';
import useAppState from '~/modules/user/shared/hooks/useAppState';
import { useTranslation } from 'react-i18next';
import useProfileMenu from '../hooks/useProfileMenu';
import IncompleteIcon from '~/shared/components/icon/Incomplete';
import LogoutIcon from '~/shared/components/icon/Logout';
import classnames from 'classnames';
import useNavigate from '~/shared/hooks/useNavigate';

interface ProfileMenuProps {
    type?: 'desktop' | 'mobile';
}

const ProfileMenu = ({ type = 'desktop' }: ProfileMenuProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {
        app: { baseUrl, embeddingConfiguration },
    } = useAppState();
    const menu = useProfileMenu();

    const handleLogout = async () => {
        navigate('/logout');
    };

    let menuStyles = {
        menu: 'o-header__submenu-account m-submenu',
        menuItem: 'm-submenu__item',
        menuItemLink: 'm-submenu__item-link',
        logoutItem: 'm-submenu__item--logout',
    };

    if (type === 'mobile') {
        menuStyles = {
            menu: 'm-account-mobile__list',
            menuItem: 'm-account-mobile__list-item',
            menuItemLink: 'm-account-mobile__list-item-link',
            logoutItem: 'm-account-mobile__list-item--logout',
        };
    }

    return (
        <ul className={menuStyles.menu}>
            {menu.map((menuItem) => (
                <li className={menuStyles.menuItem} key={menuItem.id}>
                    <NavLink className={menuStyles.menuItemLink} to={`${baseUrl}${menuItem.url}`}>
                        {menuItem.title}
                        <span className="h-space-separator"></span>
                        <span className="alert_icon_submenu" hidden={!menuItem.hasAlert}>
                            <IncompleteIcon />
                        </span>
                    </NavLink>
                </li>
            ))}
            {!embeddingConfiguration.hideLogoutButton && (
                <li className={classnames(menuStyles.menuItem, menuStyles.logoutItem)}>
                    <Button
                        className={menuStyles.menuItemLink}
                        label={t('menu.logout')}
                        onClick={handleLogout}
                        icon={<LogoutIcon />}
                    />
                </li>
            )}
        </ul>
    );
};

export default ProfileMenu;
