const PrecisionConstants = {
    MU: 0.0001
};
/**
 * Creates comparator for comparing numbers with a certain precision.
 * @param precison is the desired precision. By default this is {@link MU}
 * @returns
 */
export const withPrecision = (precison = PrecisionConstants.MU) => (a, b) => {
    return Math.abs(a - b) < precison;
};
