export interface Normalizer<T> {
    denormalize: (data: any, context?: any) => T;
    normalize: (data: T) => any;
}
