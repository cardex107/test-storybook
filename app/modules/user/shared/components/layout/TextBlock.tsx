const blockTextStyleTypeClasses: Record<string, string> = {
    small: 'm-text-block-a',
    normal: 'm-text-block-b',
    big: 'm-text-block-c',
};
export interface TextBlockProps {
    title?: string;
    text?: string;
    className?: string;
    styleType?: 'small' | 'normal' | 'big';
    children?: JSX.Element;
}

const TextBlock = ({ title, text, styleType = 'normal', className = '', children }: TextBlockProps) => {
    const baseClassName = blockTextStyleTypeClasses[styleType] ?? '';
    return (
        <div className={`${baseClassName} ${className}`}>
            {title && (
                <span className={`${baseClassName}__title-wrapper`}>
                    <span className={`${baseClassName}__title`}>{title}</span>
                </span>
            )}
            {text && <p className={`${baseClassName}__text`}>{text}</p>}
            {children && <p className={`${baseClassName}__text`}>{children}</p>}
        </div>
    );
};
export default TextBlock;
