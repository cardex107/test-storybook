import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function Verified({ className }: IconProps) {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" className={`svg-fill-brand-color-1 ${className}`}>
            <path
                fill="#66BD06"
                fillRule="evenodd"
                d="M1.414 5.045L0 6.46 4.662 11.121 13.366 3.505 12.049 2 4.753 8.384z"
            />
        </svg>
    );
}
