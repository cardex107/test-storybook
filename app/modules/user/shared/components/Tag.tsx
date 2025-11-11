import React from 'react';

export interface TagProps {
    icon: React.ReactNode;
    text: string;
    iconPosition?: 'left' | 'right';
}

const Tag = ({ icon, iconPosition = 'left', text }: TagProps) => {
    return (
        <div className="m-status-tag ">
            {iconPosition === 'left' && icon}
            {text}
            {iconPosition === 'right' && icon}
        </div>
    );
};
export default Tag;
