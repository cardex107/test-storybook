interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => (
    <p style={{ margin: '1em 0' }} className={className}>
        {children}
    </p>
);

export default Paragraph;
