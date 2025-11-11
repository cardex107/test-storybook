import { NavLink as ReactNavLink, type NavLinkProps } from '@remix-run/react';
import useAppState from '~/modules/user/shared/hooks/useAppState';

interface AppNavLinkProps extends Omit<NavLinkProps, 'to'> {
    to: string;
}

const NavLink = ({ to, ...rest }: AppNavLinkProps) => {
    const {
        app: { baseUrl },
    } = useAppState();

    const url = to.startsWith('http') ? to : `${baseUrl}${to}`;

    return <ReactNavLink to={url} {...rest} />;
};

export default NavLink;
