"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPrecisonTestSuiteA = void 0;
const withPrecision_1 = require("./withPrecision");
const determinismus_1 = require("determinismus");
const WithPrecisonTestSuiteA = () => {
    describe("Basic functionality", () => {
        test("Recongizes numbers within precison as equal", () => {
            const i = Math.floor(Math.random() * 100);
            Array(i).fill(null).map(() => {
                const randN = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
                const offset = 1;
                const precision = 10;
                const [a, b] = [
                    randN,
                    randN + offset
                ];
                expect((0, withPrecision_1.withPrecision)(precision)(a, b)).toBe(true);
            });
        });
        test("Is likely deterministic", () => {
            const precision = Math.random();
            const generator = () => [
                Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
            ];
            expect((0, determinismus_1.isLikelyDeterministic)({
                func: (0, withPrecision_1.withPrecision)(precision),
                argGenerator: generator
            })).toBe(true);
        });
    });
};
exports.WithPrecisonTestSuiteA = WithPrecisonTestSuiteA;
(0, exports.WithPrecisonTestSuiteA)();
