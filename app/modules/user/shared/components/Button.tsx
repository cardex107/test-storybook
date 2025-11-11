import React, { ReactElement } from 'react';
import InlineLoading from './InlineLoading';
import classnames from 'classnames';
import Link from '~/shared/components/Link';
import { isAbsolute } from '../utils/url';

const buttonTypeClasses: Record<string, string> = {
    primary: 'a-button',
    secondary: 'a-button a-button--secondary',
    outlined: 'a-button a-button--outlined',
    outlined_secondary: 'a-button a-button--outlined-secondary',
    ghost: 'a-button a-button--ghost',
    naked: 'a-button a-button--naked',
    naked_secondary: 'a-button a-button--naked-secondary',
    naked_white: 'a-button a-button--naked-white',
    naked_grey: 'a-button a-button--naked-grey',
    fluid: 'a-button a-button--fluid',
    fluid_primary: 'a-button a-button--fluid',
    fluid_secondary: 'a-button a-button--fluid-secondary',
};
export interface ButtonProps {
    onClick?: () => void;
    style?: any;
    className?: string;
    label?: string;
    icon?: ReactElement;
    disabled?: boolean;
    loading?: boolean;
    title?: string;
    styleType?:
        | 'primary'
        | 'secondary'
        | 'outlined'
        | 'outlined_secondary'
        | 'ghost'
        | 'naked'
        | 'naked_secondary'
        | 'naked_white'
        | 'naked_grey'
        | 'fluid'
        | 'fluid_primary'
        | 'fluid_secondary'
        | '';
    iconPosition?: 'left' | 'right';
    wrapperTag?: string;
    type?: 'submit' | 'button';
    link?: string;
    state?: Record<string, any>;
    download?: boolean;
    target?: string;
}

const Button = ({
    onClick,
    icon,
    style,
    className,
    label,
    disabled,
    loading,
    title,
    styleType = '',
    iconPosition,
    wrapperTag = 'button',
    link,
    type = 'button',
    ...props
}: ButtonProps) => {
    const actualProps: any = { ...props, to: link };
    let ElementTag: any = link && !disabled ? Link : wrapperTag;

    if (link && !disabled) {
        if (isAbsolute(link)) {
            ElementTag = 'a';
            delete actualProps.to;
            actualProps.href = link;
        } else {
            actualProps.to = link;
        }
    }

    if (props.target === '_blank' || props.target === '_top') {
        actualProps.rel = 'noopener noreferrer';
    }

    return (
        <ElementTag
            onClick={disabled ? undefined : onClick}
            style={{ ...style, opacity: disabled ? 0.5 : 1 }}
            className={`${buttonTypeClasses[styleType] ?? ''} ${className} ${classnames({
                'h-cursor': !disabled,
                'a-text-link--disabled': disabled && wrapperTag === 'a',
            })}`}
            title={title}
            disabled={disabled}
            type={type}
            {...actualProps}
            suppressHydrationWarning
        >
            {loading && <InlineLoading />}
            {iconPosition === 'right' ? (
                <>
                    {label ?? ''}
                    {!loading &&
                        icon &&
                        React.cloneElement(icon, {
                            className: `a-button__right-icon ${icon.props.className ?? ''}`,
                        })}
                </>
            ) : (
                <>
                    {!loading &&
                        icon &&
                        React.cloneElement(icon, {
                            className: `a-button__left-icon ${icon.props.className ?? ''}`,
                        })}
                    {label ?? ''}
                </>
            )}
        </ElementTag>
    );
};

export default Button;
