/**
 * Compares the stringified versions of two functions for equality.
 * @param a 
 * @param b 
 * @returns 
 */
export const functionsStringEqual = (a : Function, b : Function)=>{

    return a.toString() === b.toString();

}