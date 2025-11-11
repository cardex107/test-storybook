import React from 'react';

interface BanMessageProps {
    className: string;
    children: React.ReactNode;
}

const BanMessage = ({ className, children }: BanMessageProps) => {
    className = `o-ban-message ${className}`;
    return <div className={className}>{children}</div>;
};
export default BanMessage;
