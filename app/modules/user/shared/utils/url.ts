import { stringify } from 'qs';

export const generateUrl = (uri: string, parameters?: Record<string, string> | null, baseUrl?: string): string => {
    const params = parameters && Object.values(parameters).length ? `?${stringify(parameters)}` : '';
    return `${baseUrl ?? ''}${uri}${params}`;
};

export const isAbsolute = (url: string): boolean => url.startsWith('http');

export const parseEncodedParam = (query: string | null) => {
    if (!query) {
        return {};
    }

    return JSON.parse(atob(query));
};

export const createQueryParam = (data: Record<string, any>) => {
    return String(
        new URLSearchParams({
            q: btoa(JSON.stringify(data)),
        })
    );
};
