import { type NavigateOptions, useNavigate as useReactNavigate } from 'react-router-dom';
import useAppState from '~/modules/user/shared/hooks/useAppState';

const useNavigate = () => {
    const {
        app: { baseUrl },
    } = useAppState();
    const reactNavigate = useReactNavigate();
    const navigate = (to: string, options?: NavigateOptions) => {
        reactNavigate(`${baseUrl}${to}`, options);
    };

    return navigate;
};

export default useNavigate;
