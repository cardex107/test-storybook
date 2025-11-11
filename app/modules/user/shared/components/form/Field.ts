export interface Field {
    name: string;
    label: string;
    showAsRequired?: boolean;
    translationTokens?: Record<string, string>;
    disabled?: boolean;
    hide?: boolean;
    className?: string;
    readonly?: boolean;
}
