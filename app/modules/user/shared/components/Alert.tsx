import Button from './Button';

interface AlertProps {
    message: string;
    buttonLink: string;
    buttonLabel: string;
}

const Alert = ({ message, buttonLink, buttonLabel }: AlertProps) => {
    return (
        <div className="o-alert">
            <div className="o-alert__inner">
                <p className="o-alert__text">{message}</p>

                <Button
                    label={buttonLabel}
                    styleType="primary"
                    link={buttonLink}
                    className="o-alert__button a-button--white"
                />
            </div>
        </div>
    );
};

export default Alert;
