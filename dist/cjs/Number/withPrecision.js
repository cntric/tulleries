"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPrecision = void 0;
const PrecisionConstants = {
    MU: 0.0001
};
/**
 * Creates comparator for comparing numbers with a certain precision.
 * @param precison is the desired precision. By default this is {@link MU}
 * @returns
 */
const withPrecision = (precison = PrecisionConstants.MU) => (a, b) => {
    return Math.abs(a - b) < precison;
};
exports.withPrecision = withPrecision;
