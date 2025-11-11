import { IconProps } from '~/modules/user/shared/components/icon/types';

const EndCallIcon = ({ className }: IconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g fill="none" fillRule="evenodd">
                <circle cx="20" cy="20" r="20" fill="#F00" />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    stroke="#FFF"
                    d="M8.836 23.389c.193.193.454.312.736.314l4.373-.006c.296 0 .563-.128.758-.33.2-.207.323-.494.323-.81l.002-.728v-1.854c1.583-.449 3.181-.953 5.406-.956 2.262-.003 3.875.515 5.01.834l.393 2.66c-.01.335.12.642.336.856.191.192.452.313.739.313l4.37-.005a1.06 1.06 0 0 0 .76-.331c.2-.208.323-.495.324-.806l-.011-1.194a5.645 5.645 0 0 0-.368-1.244 4.698 4.698 0 0 0-.6-1.01c-1.104-1.118-4.227-3.599-10.948-3.592-5.704.007-8.9 1.005-10.937 3.601-.24.3-.443.638-.616 1.023a4.552 4.552 0 0 0-.35 1.242L8.5 22.572c0 .32.13.61.336.817z"
                />
            </g>
        </svg>
    );
};
export default EndCallIcon;
