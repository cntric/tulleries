"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionsStringEqual = void 0;
/**
 * Compares the stringified versions of two functions for equality.
 * @param a
 * @param b
 * @returns
 */
const functionsStringEqual = (a, b) => {
    return a.toString() === b.toString();
};
exports.functionsStringEqual = functionsStringEqual;
