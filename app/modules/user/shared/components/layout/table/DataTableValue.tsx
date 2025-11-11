import React from 'react';

interface DataTableValueProps {
    children: React.ReactNode;
}

const DataTableValue = ({ children }: DataTableValueProps) => {
    return <div className="o-data-table__data">{children}</div>;
};

export default DataTableValue;
