interface AppBadgeProps {
    image?: string;
    text: string;
    text2?: string;
}

const AppBadge = ({ image = '/assets/images/icons/icon--mobile-app.svg', text, text2 }: AppBadgeProps) => {
    return (
        <div className="m-app-badge">
            <img className="m-app-badge-mobile" src={image} alt="mobile" />
            <div className="m-app-badge-text-box">
                <span className="m-app-badge-text1">{text}</span>
                {text2 && <span className="m-app-badge-text2">{text2}</span>}
            </div>
        </div>
    );
};

export default AppBadge;
