import Link from '~/shared/components/Link';

interface ContinueButtonProps {
    label: string;
    url?: string;
    className?: string;
    onClick?: () => void;
}

function ContinueButton({ url = '/user/consultations', label, className, onClick }: ContinueButtonProps) {
    const finalClassName = className ?? 'h-margin-top-30 a-button';
    if (url.startsWith('http')) {
        return (
            <a href={url} className={finalClassName}>
                {label}
            </a>
        );
    }

    return (
        <Link to={url} className={finalClassName} onClick={onClick}>
            {label}
        </Link>
    );
}

export default ContinueButton;
