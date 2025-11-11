import React from 'react';

const DashedBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return <div className={`m-dashed-box ${className}`}>{children}</div>;
};

export default DashedBox;
