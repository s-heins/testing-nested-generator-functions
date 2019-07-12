import {generatorLevelOne} from "./generators";
import * as assert from "assert";

describe('generators', () => {
    let generator : Generator;

    beforeEach(() => {
        generator = generatorLevelOne(1);
    });


    it('calls the last function', async () => {
        assert.strictEqual(generator.next().value, 6);
    }) ;
});
