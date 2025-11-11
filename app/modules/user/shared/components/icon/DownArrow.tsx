import { IconProps } from '~/modules/user/shared/components/icon/types';

export const DownArrow = ({ className }: IconProps) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" className={`a-select__arrow svg-fill-grey ${className}`}>
            <path fill="#00008F" fillRule="nonzero" d="M3.175 4L7 7.712 10.825 4 12 5.148 7 10 2 5.148z" />
        </svg>
    );
};
