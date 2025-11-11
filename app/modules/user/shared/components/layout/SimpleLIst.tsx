interface SimpleListProps {
    items: string[];
}

const SimpleLIst = ({ items }: SimpleListProps) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default SimpleLIst;
