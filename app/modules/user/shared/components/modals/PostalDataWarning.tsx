import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ModalWarningProps } from '~/modules/amos-api/types';
import useNavigate from '~/shared/hooks/useNavigate';
import useAutoCloseModalWarning from '../../hooks/useAutoCloseModalWarning';
import useLoggedUser from '../../hooks/useLoggedUser';
import useProject from '../../hooks/useProject';
import Modal from './Modal';

const PostalDataWarning = ({ onClose }: ModalWarningProps) => {
    const { postal_data_required } = useProject();
    const { pathname } = useLocation();
    const { user } = useLoggedUser();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const showModal =
        // eslint-disable-next-line no-useless-escape
        /\/user\/consultations(?:\/[^\/]+(?:\/[^\/]+)?)?(?:\/new)?$/.test(pathname) &&
        postal_data_required &&
        user.has_postal_data === false;

    useAutoCloseModalWarning(showModal, onClose);

    return (
        <Modal
            show={showModal}
            title={t('postal_data.title')}
            message={t('common.complete.postal-data.text')}
            titleStyleType="center"
            okLabel={t('common.complete.postal-data')}
            onClickOk={() => navigate('/user/postal-data')}
            hideCancelButton
        />
    );
};

export default PostalDataWarning;
