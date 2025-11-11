import { IconProps } from '~/modules/user/shared/components/icon/types';

const ErrorIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={className}
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g
                id="form-/form-error"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
            >
                <path d="M10,4 L4,10" id="Line" stroke="#FF0000" strokeWidth="2"></path>
                <path
                    d="M10,4 L4,10"
                    id="Line"
                    stroke="#FF0000"
                    strokeWidth="2"
                    transform="translate(7.000000, 7.000000) scale(-1, 1) translate(-7.000000, -7.000000) "
                ></path>
            </g>
        </svg>
    );
};
export default ErrorIcon;
