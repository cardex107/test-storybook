import React from 'react';

interface DataTableFieldProps {
    children: React.ReactNode;
}

const DataTableField = ({ children }: DataTableFieldProps) => {
    return <div className="o-data-table__field">{children}</div>;
};

export default DataTableField;
