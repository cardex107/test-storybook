import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function CircleSend({ className }: IconProps) {
    return (
        <svg width="25" height="25" viewBox="0 0 20 19" fill="none" className={className}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.42578 17V11.18L13.8939 9.5L1.42578 7.82V2L18.8319 9.5L1.42578 17Z"
                fill="white"
            />
        </svg>
    );
}
