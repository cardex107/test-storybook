import React from 'react';

interface DataTableRowProps {
    children: React.ReactNode;
    hide?: boolean;
}

const DataTableRow = ({ children, hide = false }: DataTableRowProps) => {
    if (hide) {
        return null;
    }
    return <div className="o-data-table__data-item">{children}</div>;
};

export default DataTableRow;
