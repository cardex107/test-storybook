import { ReactElement, useCallback, useState } from 'react';
import Button, { ButtonProps } from './Button';
import Modal from './modals/Modal';

interface ConfirmButtonProps {
    onAccept: () => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactElement;
    confirmTitle: string;
    confirmMessage: string;
    onCancel?: () => void;
    confirmOkLabel?: string;
    confirmCancelLabel?: string;
    buttonTitle?: string;
    buttonLabel?: string;
    styleType?: ButtonProps['styleType'];
    buttonClassName?: string;
    wrapperTag?: string;
    onModalOpen?: () => void;
    onModalClose?: () => void;
}

const ConfirmButton = ({
    onAccept,
    disabled,
    loading,
    icon,
    onCancel,
    confirmTitle,
    confirmMessage,
    confirmOkLabel,
    confirmCancelLabel,
    buttonTitle,
    buttonLabel,
    styleType,
    buttonClassName,
    wrapperTag,
    onModalOpen,
    onModalClose,
}: ConfirmButtonProps) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = useCallback(() => {
        if (disabled) return;

        onModalOpen && onModalOpen();
        setShowModal(true);
    }, [onModalOpen, disabled]);

    const handleClickOk = useCallback(() => {
        onModalClose && onModalClose();
        setShowModal(false);
        onAccept();
    }, [onAccept, onModalClose]);

    const handleClickCancel = useCallback(() => {
        onModalClose && onModalClose();
        setShowModal(false);
        onCancel && onCancel();
    }, [onCancel, onModalClose]);

    return (
        <>
            <Button
                wrapperTag={wrapperTag}
                disabled={disabled}
                type={'button'}
                icon={icon}
                loading={loading}
                title={buttonTitle}
                label={buttonLabel}
                styleType={styleType}
                className={buttonClassName}
                onClick={handleClick}
            />
            <Modal
                show={showModal}
                title={confirmTitle}
                message={confirmMessage}
                onClickOk={handleClickOk}
                onClickCancel={handleClickCancel}
                okLabel={confirmOkLabel}
                cancelLabel={confirmCancelLabel}
                okButtonDisabled={!showModal}
            />
        </>
    );
};

export default ConfirmButton;
