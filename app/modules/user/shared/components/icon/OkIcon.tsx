import { IconProps } from '~/modules/user/shared/components/icon/types';

const OkIcon = ({ className }: IconProps) => {
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
            <g id="form-/form-ok" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                    id="Path-3"
                    fill="#7ED321"
                    fillRule="nonzero"
                    points="1.41421356 5.04546991 0 6.45968348 4.66153594 11.1212194 13.3656114 3.50515339 12.0486022 2 4.75267763 8.38393398"
                ></polygon>
            </g>
        </svg>
    );
};
export default OkIcon;
