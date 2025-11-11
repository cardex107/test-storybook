import React from 'react';

interface DataTableProps {
    children: React.ReactNode;
}

const DataTable = ({ children }: DataTableProps) => {
    return <div className="o-data-table__table">{children}</div>;
};

export default DataTable;
