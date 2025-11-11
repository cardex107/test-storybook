import classnames from 'classnames';
import Link from '~/shared/components/Link';

interface IconLinkProps {
    to: string;
    text: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    styleType?: keyof typeof stylesTypes;
}

const stylesTypes = {
    primary: '',
    secondary: 'a-button--secondary',
    ghost: 'a-button--ghost',
    white: 'a-button--white',
    fluid: 'a-button--fluid',
};

const IconLink = ({ to: link, text, icon, iconPosition = 'left', className, styleType = 'primary' }: IconLinkProps) => {
    return (
        <Link to={link} className={classnames('a-button', className, stylesTypes[styleType])} key={link}>
            {icon && iconPosition === 'left' && (
                <span className={classnames('a-button__left-icon', icon, 'a-icon')}></span>
            )}
            {text}
            {icon && iconPosition === 'right' && (
                <span className={classnames('a-button__right-icon', icon, 'a-icon')}></span>
            )}
        </Link>
    );
};

export default IconLink;
