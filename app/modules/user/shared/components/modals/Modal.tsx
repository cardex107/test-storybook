import classnames from 'classnames';
import { cloneElement, CSSProperties, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSanitizeContent from '../../hooks/useSanitizeContent';
import Button from '../Button';
import InlineLoading from '../InlineLoading';

interface BaseModalInterface {
    show: boolean;
    warning?: string;
    title?: string;
    message?: string;
    cancelLabel?: string;
    okLabel?: string;
    onClickOk?: () => void;
    onClickCancel?: () => void;
    children?: JSX.Element;
    bodyClassName?: string;
    contentClass?: string;
    okButtonDisabled?: boolean;
    okButtonLoading?: boolean;
    titleStyleType?: 'left' | 'center' | 'right';
    hideCancelButton?: boolean;
    hideHeader?: boolean;
    html?: string;
    showFooterButtons?: boolean;
}

const titleStyles: Record<string, CSSProperties> = {
    left: {},
    right: { textAlign: 'right' },
    center: { textAlign: 'center', maxWidth: '100%' },
};

const Modal = ({
    show,
    title,
    warning,
    message,
    cancelLabel,
    okLabel,
    onClickOk,
    onClickCancel,
    children,
    bodyClassName,
    contentClass,
    okButtonDisabled,
    okButtonLoading,
    titleStyleType = 'left',
    hideCancelButton,
    hideHeader,
    html,
    showFooterButtons,
}: BaseModalInterface) => {
    const modalContentReference = useRef<HTMLDivElement>(null);
    const modalBackgroundReference = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();
    const { sanitizeContent } = useSanitizeContent();
    const [hasSubmodalOpen, setHasSubmodalOpen] = useState(false);
    const onSubmodalOpen = () => {
        setHasSubmodalOpen(true);
    };

    const onSubmodalClose = () => {
        setHasSubmodalOpen(false);
    };

    useEffect(() => {
        const closeModal = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && onClickCancel) {
                onClickCancel();
            }
        };
        if (modalContentReference.current && modalBackgroundReference.current && show) {
            modalBackgroundReference.current.style.minHeight = `${modalContentReference.current.offsetHeight + 170}px`;
        }
        window.addEventListener('keydown', closeModal);

        return () => window.removeEventListener('keydown', closeModal);
    }, [onClickCancel, show]);

    return (
        <div
            data-testid={show ? 'modal_open' : 'modal_closed'}
            className={classnames('o-base-modal', {
                'is-visible': show,
            })}
            style={hasSubmodalOpen && show ? { visibility: 'hidden' } : {}}
        >
            <div className={`o-base-modal__box ${bodyClassName}`} ref={modalContentReference}>
                {children ? (
                    <div className="o-base-modal__wrapper">
                        {!hideHeader && (
                            <div className="o-base-modal__header">
                                {title && (
                                    <p className="o-base-modal__title" style={titleStyles[titleStyleType] ?? {}}>
                                        {title}
                                    </p>
                                )}
                                {onClickCancel && <Button onClick={onClickCancel} className="o-base-modal__icon" />}
                            </div>
                        )}
                        <div className="o-base-modal__body">
                            {warning && (
                                <div className="o-base-modal__warning">
                                    <p>{warning}</p>
                                </div>
                            )}
                            {message && (
                                <div className="o-base-modal__text">
                                    <p>{message}</p>
                                </div>
                            )}
                            {cloneElement(
                                children,
                                'onClickCancel' in children.props
                                    ? {
                                          onSubmodalOpen,
                                          onSubmodalClose,
                                      }
                                    : {}
                            )}
                        </div>
                        {showFooterButtons && (
                            <div className="o-base-modal__buttons-wrapper o-base-modal__buttons-wrapper--with-children">
                                {!hideCancelButton && onClickCancel && (
                                    <span
                                        className="a-button--naked h-cursor js-base-modal-close"
                                        onClick={onClickCancel}
                                    >
                                        {cancelLabel ?? t('common.cancel')}
                                    </span>
                                )}
                                {onClickOk && (
                                    <button
                                        className="a-button"
                                        name="button"
                                        onClick={onClickOk}
                                        disabled={okButtonDisabled || okButtonLoading}
                                        type="button"
                                        data-testid={show ? 'modal_open_confirm' : 'modal_closed_confirm'}
                                    >
                                        {okButtonLoading && <InlineLoading />}
                                        {okLabel ?? t('common.ok')}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={`o-base-modal__wrapper ${contentClass}`}>
                        {!hideHeader && (
                            <div className="o-base-modal__header">
                                <p className="o-base-modal__title">{title}</p>
                                {onClickCancel && <Button onClick={onClickCancel} className="o-base-modal__icon" />}
                            </div>
                        )}
                        <div className="o-base-modal__body">
                            {message && (
                                <div className="o-base-modal__text">
                                    <p>{message}</p>
                                </div>
                            )}
                            {html && <div className="o-base-modal__text">{sanitizeContent(html)}</div>}
                            <div className="o-base-modal__buttons-wrapper">
                                {!hideCancelButton && onClickCancel && (
                                    <span
                                        className="a-button--naked h-cursor js-base-modal-close"
                                        onClick={onClickCancel}
                                    >
                                        {cancelLabel ?? t('common.cancel')}
                                    </span>
                                )}
                                {onClickOk && (
                                    <button
                                        className="a-button"
                                        name="button"
                                        onClick={onClickOk}
                                        disabled={okButtonDisabled || okButtonLoading}
                                        type="button"
                                        data-testid={show ? 'modal_open_confirm' : 'modal_closed_confirm'}
                                    >
                                        {okButtonLoading && <InlineLoading />}
                                        {okLabel ?? t('common.ok')}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="o-base-modal__background" ref={modalBackgroundReference} onClick={onClickCancel}></div>
        </div>
    );
};

export default Modal;
