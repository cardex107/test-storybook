import { useTranslation } from 'react-i18next';
import useAppState from '../hooks/useAppState';
import useLoggedUser from '../hooks/useLoggedUser';
import { getProfileStatus, resolveProfileNextRoute } from '../infrastructure/services/profile';
import ContinueButton from './ContinueButton';
import VerificationList from './layout/VerificationLIst';

interface ProfileStatusProps {
    onClickContinue?: () => void;
    title?: string;
}

const ProfileStatus = ({ onClickContinue, title }: ProfileStatusProps) => {
    const { user } = useLoggedUser();
    const { project } = useAppState();
    const { t } = useTranslation();

    const verificationList = {
        items: getProfileStatus(user, project)
            .filter((item) => !item.verified)
            .map((item) => ({
                verified: item.verified,
                text: t(item.name),
            })),
    };
    const continueUrl = resolveProfileNextRoute(user, project);

    return (
        <>
            <VerificationList title={title} items={verificationList.items} />
            <ContinueButton
                label={t('common.continue')}
                {...(continueUrl ? { url: continueUrl } : {})}
                onClick={onClickContinue}
            />
        </>
    );
};

export default ProfileStatus;
