export function* generatorLevelThree(i : number) {
    return yield i + 3;
}

export function* generatorLevelTwo(i: number) {
    return yield* generatorLevelThree(i+2)
}

export function* generatorLevelOne(i: number) {
    return yield* generatorLevelTwo(i);
}

console.log(generatorLevelOne(1));
console.log(generatorLevelOne(1).next().value);
