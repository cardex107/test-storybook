import { PortalCompoment } from "./PortalComponent";

interface AnchorsMenuProps extends PortalCompoment {
    menu: { label: string; href: string }[];
}

const AnchorsMenu = ({ menu }: AnchorsMenuProps) => {
    return (
        <div className="m-anchors-menu">
            {menu.map((item) => (
                <a className="m-anchors-menu__link" href={`#${item.href}`} key={item.href}>
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default AnchorsMenu;
