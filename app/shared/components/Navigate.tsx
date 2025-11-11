import { Navigate as ReactNavigate, type NavigateProps } from 'react-router';
import useAppState from '~/modules/user/shared/hooks/useAppState';

interface AppNavigateProps extends Omit<NavigateProps, 'to'> {
    to: string;
}

const Navigate = ({ to, ...rest }: AppNavigateProps) => {
    const {
        app: { baseUrl },
    } = useAppState();

    return <ReactNavigate to={`${baseUrl}${to}`} {...rest} />;
};

export default Navigate;
