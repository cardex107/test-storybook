import { IconProps } from '~/modules/user/shared/components/icon/types';

const Incomplete = ({ className }: IconProps) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" className={className}>
            <g fill="none" fillRule="evenodd">
                <path
                    fill="#ff0000"
                    d="M7 0c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm0 9.66c-.387 0-.7.313-.7.7 0 .387.313.7.7.7.387 0 .7-.313.7-.7 0-.387-.313-.7-.7-.7zm.805-6.86h-1.61l.27 5.6h1.078l.262-5.6z"
                />
            </g>
        </svg>
    );
};

export default Incomplete;
