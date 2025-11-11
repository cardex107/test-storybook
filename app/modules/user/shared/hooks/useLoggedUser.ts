import { Client } from '~/modules/amos-api/types';
import useAppState from './useAppState';

interface UseLoggerUserInterface {
    user: Client;
    refreshUser: () => Promise<void>;
}

const useLoggedUser = (): UseLoggerUserInterface | never => {
    const {
        auth: { user },
        refreshUser,
    } = useAppState();
    if (!user) {
        throw new Error('unauthorized');
    }
    return { user, refreshUser };
};

export default useLoggedUser;
