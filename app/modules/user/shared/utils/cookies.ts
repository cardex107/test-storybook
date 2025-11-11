export const getCookie = (name: string) => {
    const parameter = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (const element of ca) {
        let c = element;
        while (c.startsWith(' ')) {
            c = c.substring(1);
        }
        if (c.startsWith(parameter)) {
            const value = c.substring(parameter.length, c.length);
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        }
    }
    return '';
};

export const setCookie = (name: string, value: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${name}=${JSON.stringify(value)};${expires}; Secure; path=/; Partitioned; SameSite=None`;
};

export const removeCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; path=/; Partitioned; SameSite=None`;
};

export const resolveCookieDomain = (host: string) => {
    const secondLevelDomainsRegex =
        /\.asn\.au$|\.com\.au$|\.net\.au$|\.id\.au$|\.org\.au$|\.edu\.au$|\.gov\.au$|\.csiro\.au$|\.act\.au$|\.nsw\.au$|\.nt\.au$|\.qld\.au$|\.sa\.au$|\.tas\.au$|\.vic\.au$|\.wa\.au$|\.co\.at$|\.or\.at$|\.priv\.at$|\.ac\.at$|\.avocat\.fr$|\.aeroport\.fr$|\.veterinaire\.fr$|\.co\.hu$|\.film\.hu$|\.lakas\.hu$|\.ingatlan\.hu$|\.sport\.hu$|\.hotel\.hu$|\.ac\.nz$|\.co\.nz$|\.geek\.nz$|\.gen\.nz$|\.kiwi\.nz$|\.maori\.nz$|\.net\.nz$|\.org\.nz$|\.school\.nz$|\.cri\.nz$|\.govt\.nz$|\.health\.nz$|\.iwi\.nz$|\.mil\.nz$|\.parliament\.nz$|\.ac\.za$|\.gov\.za$|\.law\.za$|\.mil\.za$|\.nom\.za$|\.school\.za$|\.net\.za$|\.co\.uk$|\.org\.uk$|\.me\.uk$|\.ltd\.uk$|\.plc\.uk$|\.net\.uk$|\.sch\.uk$|\.ac\.uk$|\.gov\.uk$|\.mod\.uk$|\.mil\.uk$|\.nhs\.uk$|\.police\.uk$/;

    const domain = host.split(':')[0];
    const domainParts = domain.split('.').reverse();

    if (secondLevelDomainsRegex.test(domain)) {
        return `${domainParts[2]}.${domainParts[1]}.${domainParts[0]}`;
    } else {
        return domainParts.length > 1 ? `${domainParts[1]}.${domainParts[0]}` : domainParts[0];
    }
};
