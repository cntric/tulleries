/**
 * Creates comparator for comparing numbers with a certain precision.
 * @param precison is the desired precision. By default this is {@link MU}
 * @returns
 */
export declare const withPrecision: (precison?: number) => (a: number, b: number) => boolean;
