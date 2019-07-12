export function* otherGeneratorLevelThree(i : number) {
    return yield i + 3;
}

export function* otherGeneratorLevelTwo(i: number) {
    return yield otherGeneratorLevelThree(i+2)
}

export function* otherGeneratorLevelOne(i: number) {
    return yield otherGeneratorLevelTwo(i);
}

console.log(otherGeneratorLevelOne(1));
console.log(otherGeneratorLevelOne(1).next().value);
