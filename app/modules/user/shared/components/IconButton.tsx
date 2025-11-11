interface IconButtonProps {
    icon: JSX.Element;
    className?: string;
    onClick: () => void;
    testId?: string;
    title?: string;
}

function IconButton({ icon, className, onClick, testId, title }: IconButtonProps) {
    return (
        <button className={className} onClick={onClick} data-testid={testId} title={title} type="button">
            {icon}
        </button>
    );
}

export default IconButton;
