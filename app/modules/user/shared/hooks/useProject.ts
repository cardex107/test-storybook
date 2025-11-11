import { Project } from '~/modules/amos-api/types';
import useAppState from './useAppState';

export default function useProject(): Project | never {
    const { project } = useAppState();
    if (!project) {
        throw new Error('no project available');
    }
    return project;
}
