import React from 'react';
import ErrorPageIcon from './icon/ErrorPage';
import SuccessPageIcon from './icon/SuccessPage';
import useSanitizeContent from '../hooks/useSanitizeContent';

interface MessageBlockProps {
    type?: 'error' | 'success';
    title: string;
    message?: string;
    html?: string;
    buttons?: React.ReactNode;
}

const MessageBlock = ({ type = 'success', title, message, html, buttons }: MessageBlockProps) => {
    const { sanitizeContent } = useSanitizeContent();
    return (
        <div className="o-message-block">
            <div className="o-message-block__icon-wrapper">
                {type === 'error' ? <ErrorPageIcon /> : <SuccessPageIcon />}
            </div>
            <div className="o-message-block__inner">
                <p className="o-message-block__title">{title}</p>
                {message && (
                    <div className="o-message-block__text-block">
                        <p>{message}</p>
                    </div>
                )}

                {html && (
                    <div className="o-message-block__text-block">
                        <p>{sanitizeContent(html)}</p>
                    </div>
                )}
                {buttons && <div className="o-message-block__button-wrapper">{buttons}</div>}
            </div>
        </div>
    );
};

export default MessageBlock;
