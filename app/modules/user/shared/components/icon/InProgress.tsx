import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function InProgress({ className }: IconProps) {
    return (
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className={`svg-fill-brand-color-1 ${className}`}>
            <path d="M10 6L0.249999 11.6292L0.25 0.370834L10 6Z" fill="" />
        </svg>
    );
}
