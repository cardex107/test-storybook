import classnames from 'classnames';
import { IconProps } from '~/modules/user/shared/components/icon/types';
export default function Trash({ className, color = 'red' }: IconProps) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" className={classnames(`svg-fill-${color}`, className)}>
            <path
                fill="currentColor"
                d="M12 0c1.105 0 2 .895 2 2v1h6v4h-2.127l-1.65 13H3.777L2.127 7H0V3h6V2c0-1.105.895-2 2-2h4zm4.864 7H3.135l1.523 12h10.683l1.523-12zm-9.866.96l.798 9.968-.997.08-.797-9.968.996-.08zm6.004 0l.996.08-.797 9.968-.997-.08.798-9.968zM10.5 8v9.968h-1V8h1zM19 4H1v2h18V4zm-7-3H8c-.513 0-.936.386-.993.883L7 2v1h6V2c0-.513-.386-.936-.883-.993L12 1z"
            />
        </svg>
    );
}
