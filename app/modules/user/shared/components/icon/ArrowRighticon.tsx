import { IconProps } from '~/modules/user/shared/components/icon/types';
const ArrowRighticon = ({ className }: IconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
            <path
                fill="#aaaaaa"
                fillRule="nonzero"
                d="M9.466 5.5L8.08 3.764A1 1 0 0 1 9.64 2.516l2.605 3.259c.067.063.124.135.171.214l.52.651-3.296 4.124a1 1 0 0 1-1.562-1.248L9.69 7.5H1.058a1 1 0 1 1 0-2h8.408z"
            />
        </svg>
    );
};
export default ArrowRighticon;
