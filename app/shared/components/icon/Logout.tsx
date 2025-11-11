import { IconProps } from '~/modules/user/shared/components/icon/types';

const Logout = ({ className }: IconProps) => {
    return (
        <svg width="15" height="15" viewBox="0 0 11 11" className={className}>
            <g>
                <path
                    fill="currentColor"
                    d="M5.2,9.9H1.1V1.1h4.1c0.3,0,0.5-0.2,0.5-0.5S5.5,0,5.2,0H0.5C0.2,0,0,0.2,0,0.5v9.9C0,10.8,0.2,11,0.5,11h4.6 c0.3,0,0.5-0.2,0.5-0.5c0-0.1-0.1-0.3-0.2-0.4C5.4,10,5.3,9.9,5.2,9.9z"
                />
                <path
                    fill="currentColor"
                    d="M10.8,5.1L8.6,2.8C8.5,2.7,8.3,2.6,8.2,2.6C8,2.6,7.9,2.7,7.8,2.8C7.6,3,7.6,3.4,7.8,3.6L9.2,5H2.9C2.6,5,2.3,5.2,2.3,5.5 s0.2,0.5,0.5,0.5h6.3L7.8,7.4C7.6,7.6,7.6,8,7.8,8.2C7.9,8.3,8,8.4,8.2,8.4c0,0,0,0,0,0c0.1,0,0.3-0.1,0.4-0.2l2.3-2.3 C11.1,5.7,11.1,5.3,10.8,5.1z"
                />
            </g>
        </svg>
    );
};

export default Logout;
