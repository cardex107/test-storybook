import { IconProps } from '~/modules/user/shared/components/icon/types';

export default function Check({ className }: IconProps) {
    return (
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className={`m-thanks-layer__icon svg-fill-brand-color-1 ${className}`}
        >
            <path
                fill="#aaaaaa"
                fillRule="nonzero"
                d="M20.99 29.513l5.288 6.88L38.981 20.32a1.5 1.5 0 0 1 2.354 1.86l-13.753 17.4c-.327.393-.817.62-1.352.62a1.702 1.702 0 0 1-1.323-.67l-6.296-8.188a1.5 1.5 0 1 1 2.378-1.829zM30 59.79C13.548 59.789.211 46.452.211 30S13.548.211 30 .211 59.789 13.548 59.789 30 46.452 59.789 30 59.789zm0-.423c16.219 0 29.366-13.147 29.366-29.366S46.22.634 30 .634.634 13.78.634 30 13.78 59.366 30 59.366z"
            />
        </svg>
    );
}
