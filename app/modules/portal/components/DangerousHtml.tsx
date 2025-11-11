const DangerousHtml = ({ html, className }: { html: string | string[]; className?: string }) => {
    const actualContent = Array.isArray(html) ? html.filter(Boolean).join(' ') : html;
    return <div className={className} dangerouslySetInnerHTML={{ __html: actualContent }} />;
};

export default DangerousHtml;
