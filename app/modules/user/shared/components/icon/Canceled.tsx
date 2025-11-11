import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function Pending({ className, color = 'grey' }: IconProps) {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`svg-fill-${color} ${className}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.30597 0.133453L0.132817 1.3066L3.82621 5L0.132812 8.6934L1.30596 9.86655L4.99936 6.17315L8.69274 9.86652L9.86589 8.69338L6.17251 5L9.86588 1.30663L8.69273 0.133477L4.99936 3.82685L1.30597 0.133453Z"
                fill=""
            />
        </svg>
    );
}
