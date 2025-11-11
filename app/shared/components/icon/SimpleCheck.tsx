import { IconProps } from '~/modules/user/shared/components/icon/types';

export default function SimpleCheck({ className }: IconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" className={className}>
            <path fill="currentColor" fillRule="nonzero" d="M6 10.78L3.22 8l-.95.94L6 12.67l8-8-.94-.94z" />
        </svg>
    );
}
