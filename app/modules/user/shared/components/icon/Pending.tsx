import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function Pending({ className }: IconProps) {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className={`svg-fill-brand-color-1 ${className}`}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13ZM5.65639 6.98315L5.65668 6.98286L3.00027 4.32645L3.66039 3.66633L6.3168 6.32274L9.63954 3L10.2997 3.66012L6.31651 7.64326L5.65639 6.98315Z"
                fill=""
            ></path>
        </svg>
    );
}
