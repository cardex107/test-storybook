import { useEffect, useRef } from 'react';
import AlertIcon from './icon/Alert';

const errorMessageClasses: Record<string, string> = {
    default: 'm-message m-message--error',
    naked: 'm-message m-message--error-naked',
};
interface ErrorMessageProps {
    message: string;
    type?: 'default' | 'naked';
}

const ErrorMessage = ({ message, type = 'default' }: ErrorMessageProps) => {
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <div
            className={`o-form__error-message ${errorMessageClasses[type]} h-margin-bottom-20 h-margin-top-10`}
            ref={messageRef}
        >
            <AlertIcon />
            <span className="m-message__text">{message}</span>
        </div>
    );
};

export default ErrorMessage;
