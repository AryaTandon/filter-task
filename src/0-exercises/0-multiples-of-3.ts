function getMultiplesOfThree(multiple: number[]): number[] {
    return multiple.filter(isMultipleOfThree);
}

function isMultipleOfThree(n: number): boolean {
    return n % 3 == 0;
}

export { isMultipleOfThree, getMultiplesOfThree };