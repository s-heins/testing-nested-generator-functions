import * as assert from "assert";
import {otherGeneratorLevelOne} from "./otherGenerators";

describe('generators', () => {
    let generator: Generator;

    beforeEach(() => {
        generator = otherGeneratorLevelOne(1);
    });


    it('calls the last function', async () => {
        const genTwo: Generator = generator.next().value;
        const genThree: Generator = genTwo.next().value;
        assert.strictEqual(genThree.next().value, 6);
    });
});
