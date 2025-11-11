import { useContext } from 'react';
import { AppContext } from '../infrastructure/context/AppProvider';

export default function useAppState() {
    return useContext(AppContext);
}
