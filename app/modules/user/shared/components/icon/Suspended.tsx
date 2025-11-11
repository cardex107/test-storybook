import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function Suspended({ className, color = 'brand-color-1' }: IconProps) {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`svg-fill-${color} ${className}`}>
            <rect x="3" y="0" width="3" height="10" fill="currentColor" />
            <rect x="9" y="0" width="3" height="10" fill="currentColor" />
        </svg>
    );
}
