const PrecisionConstants = {
    MU : 0.0001
} as const

/**
 * Creates comparator for comparing numbers with a certain precision.
 * @param precison is the desired precision. By default this is {@link MU}
 * @returns 
 */
export const withPrecision = (precison : number = PrecisionConstants.MU)=>(a : number, b : number)=>{
    return Math.abs(a - b) < precison;
}