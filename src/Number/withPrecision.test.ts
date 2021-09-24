import { withPrecision } from "./withPrecision";

export const WithPrecisonTestSuiteA = ()=>{

    describe("Basic functionality", ()=>{

        test("Recongizes numbers within precison as equal", ()=>{


            const i = Math.floor(Math.random() * 100);

            Array(i).fill(null).map(()=>{

                const randN = Math.floor(Math.random() * 100)
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

    })

}; WithPrecisonTestSuiteA();