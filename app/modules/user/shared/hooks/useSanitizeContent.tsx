type SanitizeContentOptions = {
    className?: string;
    createBreaklines?: boolean;
    wrapperTag?: string;
};

const sanitize = (html: string) => {
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

const useSanitizeContent = () => {
    const sanitizeContent = (html: string, options?: SanitizeContentOptions) => {
        if (options?.createBreaklines) {
            html = html.replace(/\n/g, '<br/>');
        }
        const sanitized = sanitize(html);
        const WrapperTag: any = options?.wrapperTag ?? 'span';
        return <WrapperTag className={options?.className} dangerouslySetInnerHTML={{ __html: sanitized }} />;
    };

    return { sanitizeContent };
};

export default useSanitizeContent;
