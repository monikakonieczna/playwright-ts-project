export function sortAlphabeticallyASC(array: Array<string>) {
    return array.sort();
}

export function sortAlphabeticallyDESC(array: Array<string>) {
    return array.sort((one, two) => (one > two ? -1 : 1));
}

export function compareStringArraysWithOrder(arr1: Array<string>, arr2: Array<string>) {
    return (arr1.join(',') === arr2.join(',') ? true : false);
}

export function compareNumArrays(arr1: Array<number>, arr2: Array<number>) {
    return arr1.toString() === arr2.toString();
}

export function sortPriceASC(array: Array<number>) {
    return array.sort(
        function (a, b) {
            return (a - b)
        });
}

export function sortPriceDESC(array: Array<number>) {
    return array.sort(
        function (a, b) {
            return (b - a)
        });
}

function extractNumberFromString(text: string) {
    let str = text.match(/[0-9]*[.]\d*/g)!;
    return Number(str.join(""));
}

export function convertStringArrayIntoNumberArray(array: Array<string>) {
    const numArray: Array<number> = [];

    for (let i = 0; i < array.length; i++) {
        const num = extractNumberFromString(array[i]);
        numArray[i] = num;
    }

    return numArray;
}