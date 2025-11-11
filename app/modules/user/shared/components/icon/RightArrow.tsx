import classnames from 'classnames';
import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function RightArrow({ className, color }: IconProps) {
    return (
        <svg
            className={classnames(color ? `svg-fill-${color}` : '', className)}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
        >
            <path
                fill="currentColor"
                d="M3.124 1.885l-.054.075c-.109.182-.09.419.054.584l3.461 3.955-3.461 3.957c-.165.189-.165.47 0 .659l.625.714c.199.228.553.228.752 0l4.375-5c.165-.188.165-.47 0-.658l-4.375-5c-.199-.228-.553-.228-.752 0l-.625.714z"
            ></path>
        </svg>
    );
}
