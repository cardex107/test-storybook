interface DataTableLinkProps {
    label?: string;
    text: string;
    onClick: () => void;
}

const DataTableLink = ({ label, text, onClick }: DataTableLinkProps) => {
    return (
        <div className="o-data-table__data-wrapper">
            <span className="o-data-table__data">{label}</span>
            <span className="o-data-table__link" onClick={onClick}>
                {text}
            </span>
        </div>
    );
};

export default DataTableLink;
