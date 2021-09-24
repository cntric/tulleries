import { functionsStringEqual } from "./functionsStringEqual";
import { isLikelyDeterministic } from "determinismus";
export const WithPrecisonTestSuiteA = () => {
    describe("Basic functionality", () => {
        test("Recognizes functions with same string as equal", () => {
            const a = (a, b) => {
                return a + b;
            };
            const b = (a, b) => {
                return a + b;
            };
            expect(functionsStringEqual(a, b)).toBe(true);
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
            expect(isLikelyDeterministic({
                func: functionsStringEqual,
                argGenerator: generator
            })).toBe(true);
        });
    });
};
WithPrecisonTestSuiteA();
