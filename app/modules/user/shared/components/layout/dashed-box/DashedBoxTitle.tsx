interface DashedBoxTitleProps {
    title: string;
    subtitle?: string;
    titleClassName?: string;
}

const DashedBoxTitle = ({ title, subtitle, titleClassName = '' }: DashedBoxTitleProps) => {
    return (
        <div className="m-dashed-box__text-wrapper">
            <span className={`m-dashed-box__title ${titleClassName}`}>{title}</span>
            {subtitle && <span className="m-dashed-box__subtitle">{subtitle}</span>}
        </div>
    );
};

export default DashedBoxTitle;
