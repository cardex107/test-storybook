export interface InfoMessageProps {
    message: string;
    className?: string;
    id?: string;
}

export const InfoMessage = ({ message, className, id }: InfoMessageProps) => {
    return (
        <div id={id} className={'m-message ' + className}>
            <span className="m-message__text">{message}</span>
        </div>
    );
};
