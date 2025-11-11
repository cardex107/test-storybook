import Flatpickr from 'flatpickr';

const DEFAULT_FLATPICKR_LOCALE = 'default';
export const convertLocaleToFlatpickrLocale = (locale: string) =>
    ({
        'ca-ES': 'cat',
        'da-DK': 'da',
        'de-DE': 'de',
        'el-GR': 'gr',
        'en-UK': 'en',
        'en-US': 'en',
        'es-ES': 'es',
        'fi-FI': 'fi',
        'fr-FR': 'fr',
        'hu-HU': 'hu',
        'it-IT': 'it',
        'ja-JP': 'ja',
        'ko-KR': 'ko',
        'lt-LT': 'lt',
        'ms-MY': 'ms',
        'nl-NL': 'nl',
        'pl-PL': 'pl',
        'pt-PT': 'pt',
        'ro-RO': 'ro',
        'sl-SL': 'sl',
        'sv-SE': 'sv',
        'th-TH': 'th',
        'tl-PH': 'default',
        'tr-TR': 'tr',
        'zh-CN': 'zh',
        'zh-HK': 'zh',
    })[locale] ?? DEFAULT_FLATPICKR_LOCALE;

const loadLocalization = async (locale: string) => {
    const localePath = convertLocaleToFlatpickrLocale(locale);
    try {
        await import(`../../../../node_modules/flatpickr/dist/l10n/${localePath}.js`);
    } catch (e) {
        await import('flatpickr/dist/l10n/default.js');
    }

    //@ts-expect-error internal function
    Flatpickr.localize(Flatpickr.l10ns[localePath]);
};

export default loadLocalization;
