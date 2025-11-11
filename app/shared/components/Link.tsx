import { Link as ReactLink, type LinkProps } from 'react-router-dom';
import useAppState from '~/modules/user/shared/hooks/useAppState';

interface AppLinkProps extends Omit<LinkProps, 'to'> {
    to: string;
}

const Link = ({ to, ...rest }: AppLinkProps) => {
    const {
        app: { baseUrl },
    } = useAppState();

    return (
        <ReactLink
            to={to.startsWith('http') || to.startsWith('tel') || to.startsWith('mail') ? to : `${baseUrl}${to}`}
            {...rest}
        />
    );
};

export default Link;
