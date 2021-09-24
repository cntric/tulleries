import { functionsStringEqual } from "./functionsStringEqual";
import {isLikelyDeterministic} from "determinismus";

export const WithPrecisonTestSuiteA = ()=>{

    describe("Basic functionality", ()=>{

        test("Recognizes functions with same string as equal", ()=>{


            const a = (a : number, b : number)=>{
                return a + b;
            }

            const b = (a : number, b : number)=>{
                return a + b;
            }
         
            expect(
                functionsStringEqual(a, b)
            ).toBe(true);

   
        })

        test("Is likely deterministic", ()=>{

            const possibleFuncs = [
                (a : number, b : number)=>{
                    return a + b;
                },
                (a : number, b : number)=>{
                    return a - b;
                },
                (a : number, b : number)=>{
                    return a * b;
                },
                (a : number, b : number)=>{
                    return a / b;
                },
            ] as const

            const getRandomFunc = ()=>{
                return possibleFuncs[
                    Math.floor(
                        Math.random()
                        * possibleFuncs.length
                    )
                ]
            }

            const generator = () : [
                typeof possibleFuncs[number], 
                typeof possibleFuncs[number]
            ]=>[
                getRandomFunc(),
                getRandomFunc()
            ]

            expect(
                isLikelyDeterministic({
                    func: functionsStringEqual,
                    argGenerator : generator
                })
            ).toBe(true);

        })

    })

}; WithPrecisonTestSuiteA();