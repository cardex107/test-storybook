import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

type AlertType = 'warning' | 'success' | 'info' | 'error';

interface NewWarningProps {
    type: AlertType;
    title: string;
    message?: string;
    linkText?: string;
    linkHref?: string;
    onClose?: () => void;
}

const NewWarning = ({ 
    type, 
    title, 
    message, 
    linkText, 
    linkHref,
    onClose 
}: NewWarningProps) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    };

    if (!isVisible) return null;

    const getIcon = () => {
        switch (type) {
            case 'warning':
                return '!';
            case 'success':
                return '✓';
            case 'info':
                return 'ℹ';
            case 'error':
                return '✕';
            default:
                return '!';
        }
    };

    return (
        <div className={`container_alert container_alert--${type}`}>
            <span className="container_alert__icon">{getIcon()}</span>
            <h3 className="container_alert__title">{title}</h3>
            {(message || linkText) && (
                <div className="container_alert__content">
                    {message && <p className="container_alert__message">{message}</p>}
                    {linkText && linkHref && (
                        <a href={linkHref} className="container_alert__link">
                            {linkText}
                        </a>
                    )}
                </div>
            )}
            <a 
                className="container_alert__close" 
                onClick={handleClose}
                role="button"
                aria-label="Close alert"
            >
                <span className="icon-close">×</span>
            </a>
        </div>
    );
};

const meta = {
    component: NewWarning,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['warning', 'success', 'info', 'error'],
        },
    },
} satisfies Meta<typeof NewWarning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
    args: {
        type: 'warning',
        title: 'Warning!',
        message: 'This is a warning message that requires your attention.',
        linkText: 'Ok',
        linkHref: '#',
    },
};

export const Success: Story = {
    args: {
        type: 'success',
        title: 'Success!',
        message: 'Your action has been completed successfully.',
        linkText: 'Ok',
        linkHref: '#',
    },
};

export const Info: Story = {
    args: {
        type: 'info',
        title: 'Information',
        message: 'Here is some important information you should know.',
        linkText: 'Ok',
        linkHref: '#',
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        title: 'Error!',
        message: 'Something went wrong. Please try again later.',
        linkText: 'Ok',
        linkHref: '#',
    },
};
