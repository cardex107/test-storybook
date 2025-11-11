import classnames from 'classnames';
import { IconProps } from './types';
export default function ChatConsultation({ className, circle, color = 'brand-color-1', width, height }: IconProps) {
    return (
        <div className={classnames({ 'a-svg-rounded': circle }, `svg-fill-${color}`, className)}>
            <svg viewBox="0 0 50 50" width={width} height={height}>
                <path d="M12,47.8A2.81,2.81,0,0,1,9.15,45V38.26h-5a3.4,3.4,0,0,1-3.4-3.4V7.67a3.41,3.41,0,0,1,3.4-3.41h41.4a3.41,3.41,0,0,1,3.4,3.41V34.86a3.41,3.41,0,0,1-3.4,3.4H21.91l-9.24,9.25A1,1,0,0,1,12,47.8ZM4.14,6.26a1.41,1.41,0,0,0-1.4,1.41V34.86a1.4,1.4,0,0,0,1.4,1.4h6a1,1,0,0,1,1,1V45a.81.81,0,0,0,.47.74l9.17-9.18a1,1,0,0,1,.71-.29h24a1.4,1.4,0,0,0,1.4-1.4V7.67a1.41,1.41,0,0,0-1.4-1.41ZM40,15.05a1,1,0,0,0-1-1H8.7a1,1,0,1,0,0,2H39A1,1,0,0,0,40,15.05ZM23.37,22.38a1,1,0,0,0-1-1H8.7a1,1,0,1,0,0,2H22.37A1,1,0,0,0,23.37,22.38Z" />
            </svg>
        </div>
    );
}
