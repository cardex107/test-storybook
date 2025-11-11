import { PortalCompoment } from "./PortalComponent";

interface BannerListProps extends PortalCompoment {
    image: string;
    title: string;
    list: string[];
}

const BannerList = ({ key, image, title, list }: BannerListProps) => {
    return (
        <div id={key} className="o-banner-list">
            <img src={image} className="o-banner-list__image" alt="" />
            <div className="o-banner-list__text-wrapper">
                <h3 className="o-banner-list__title">{title}</h3>
                <ul className="o-banner-list__list">
                    {list.map((item) => (
                        <li className="o-banner-list__list-item" key={item}>
                            <span className="o-banner-list__list-icon"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BannerList;
