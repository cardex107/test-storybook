import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function Done({ className }: IconProps) {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className={`svg-fill-brand-color-1 ${className}`}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.41421 3.04547L0 4.45968L4.66154 9.12122L13.3656 1.50515L12.0486 0L4.75268 6.38393L1.41421 3.04547Z"
                fill=""
            />
        </svg>
    );
}
