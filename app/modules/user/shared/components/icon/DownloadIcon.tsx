import classnames from 'classnames';
import { IconProps } from '~/modules/user/shared/components/icon/types';

export default function DownloadIcon({ className, color }: IconProps) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className={classnames({ [`svg-fill-${color}`]: color }, className)}
        >
            <g fill="none" fillRule="evenodd">
                <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M9.565 4H7.403V0h-3.24v4H2l3.783 4.67L9.565 4zM2 10v1.33h7.557V10H2z"
                ></path>
            </g>
        </svg>
    );
}
