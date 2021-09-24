import { withPrecision } from "./withPrecision";
import {isLikelyDeterministic} from "determinismus";

export const WithPrecisonTestSuiteA = ()=>{

    describe("Basic functionality", ()=>{

        test("Recongizes numbers within precison as equal", ()=>{


            const i = Math.floor(Math.random() * 100);

            Array(i).fill(null).map(()=>{

                const randN = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
                const offset = 1;
                const precision = 10;

                const [
                    a,
                    b
                ] = [
                    randN,
                    randN + offset
                ]

                expect(
                    withPrecision(precision)(a, b)
                ).toBe(true);

            })
   
        })

        test("Is likely deterministic", ()=>{

            const precision = Math.random();
            const generator = () : [number, number]=>[
                Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
            ]

            expect(
                isLikelyDeterministic({
                    func: withPrecision(precision),
                    argGenerator : generator
                })
            ).toBe(true);

        })

    })

}; WithPrecisonTestSuiteA();