"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPrecisonTestSuiteA = void 0;
const functionsStringEqual_1 = require("./functionsStringEqual");
const determinismus_1 = require("determinismus");
const WithPrecisonTestSuiteA = () => {
    describe("Basic functionality", () => {
        test("Recognizes functions with same string as equal", () => {
            const a = (a, b) => {
                return a + b;
            };
            const b = (a, b) => {
                return a + b;
            };
            expect((0, functionsStringEqual_1.functionsStringEqual)(a, b)).toBe(true);
        });
        test("Is likely deterministic", () => {
            const possibleFuncs = [
                (a, b) => {
                    return a + b;
                },
                (a, b) => {
                    return a - b;
                },
                (a, b) => {
                    return a * b;
                },
                (a, b) => {
                    return a / b;
                },
            ];
            const getRandomFunc = () => {
                return possibleFuncs[Math.floor(Math.random()
                    * possibleFuncs.length)];
            };
            const generator = () => [
                getRandomFunc(),
                getRandomFunc()
            ];
            expect((0, determinismus_1.isLikelyDeterministic)({
                func: functionsStringEqual_1.functionsStringEqual,
                argGenerator: generator
            })).toBe(true);
        });
    });
};
exports.WithPrecisonTestSuiteA = WithPrecisonTestSuiteA;
(0, exports.WithPrecisonTestSuiteA)();
