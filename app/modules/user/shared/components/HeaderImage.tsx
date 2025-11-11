interface HeaderImageProps {
    imageUrl: string;
    title?: string;
}

const HeaderImage = ({ imageUrl, title }: HeaderImageProps) => {
    return (
        <div className="o-header-image">
            <div
                className="o-header-image__image"
                style={{
                    backgroundImage: `url("${imageUrl}")`,
                }}
            ></div>
            {title && (
                <div className="o-header-image__text-wrapper">
                    <h1 className="o-header-image__title">{title}</h1>
                </div>
            )}
        </div>
    );
};

export default HeaderImage;
