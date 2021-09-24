/**
 * Compares the stringified versions of two functions for equality.
 * @param a
 * @param b
 * @returns
 */
export const functionsStringEqual = (a, b) => {
    return a.toString() === b.toString();
};
