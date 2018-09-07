// If a is smaller than b, the function returns a negative value,
// If a equal to b, it returns 0.
// If a is larger than b, it returns a positive value.
export type CompareFn = <T>(a: T, b: T) => number;
