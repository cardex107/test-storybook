import classnames from 'classnames';
import { createRef, useEffect } from 'react';
import VerifiedIcon from './icon/Verified';

interface SuccessMessageProps {
    message?: string;
}

const SuccessMessage = ({ message }: SuccessMessageProps) => {
    const divRef = createRef<HTMLDivElement>();

    useEffect(() => {
        let subscribed = true;

        /**
         * @todo Do it properly with React animations
         */
        setTimeout(() => {
            if (message && subscribed && divRef.current) {
                divRef.current.classList.remove('is-visible');
            }
        }, 5000);

        return () => {
            subscribed = false;
        };
    }, [divRef, message]);

    return (
        <div
            ref={divRef}
            className={classnames('m-form-feedback', {
                'is-visible': Boolean(message),
            })}
        >
            {message && (
                <>
                    <VerifiedIcon />
                    <span>{message}</span>
                </>
            )}
        </div>
    );
};

export default SuccessMessage;
