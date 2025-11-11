import { useTranslation } from 'react-i18next';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ModalWarningProps } from '~/modules/amos-api/types';
import { SHOW_VALIDATION_ERROR_PARAM } from '../../config/constants';
import useAutoCloseModalWarning from '../../hooks/useAutoCloseModalWarning';
import ProfileStatus from '../ProfileStatus';
import Modal from './Modal';

const CQCWarning = ({ onClose }: ModalWarningProps) => {
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    /** We assume that the only error is 'cqc' */
    const handleCancel = () => {
        onClose && onClose();
    };

    const showModal = pathname.includes('/user/consultations') && searchParams.has(SHOW_VALIDATION_ERROR_PARAM);

    useAutoCloseModalWarning(showModal, onClose);

    return (
        <Modal
            show={showModal}
            title={t('consultations.cqc.title')}
            titleStyleType="center"
            onClickCancel={handleCancel}
        >
            <div className="h-text-center">
                <ProfileStatus />
            </div>
        </Modal>
    );
};

export default CQCWarning;
