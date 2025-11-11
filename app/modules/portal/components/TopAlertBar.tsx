import { PortalCompoment } from "./PortalComponent";

interface BarAlertProps extends PortalCompoment {
    message?: string;
    link?: string;
    linkLabel?: string;
    strongText?: string;
}
const TopBarAlert = ({ message, link, linkLabel, strongText }: BarAlertProps) => {
    return (
        <div className="o-top-bar-alert">
            {strongText && <strong>{strongText}</strong>}

            {message && <span>{message}</span>}

            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {linkLabel || link}
                </a>
            )}
        </div>
    );
};

export default TopBarAlert;
