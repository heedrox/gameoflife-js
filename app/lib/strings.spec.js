import {stringContainsOnly} from './strings'

describe("string contains only", () => {
    it("should check if string ONLY contains some list of chars", () => {
        const stringAreVowels = stringContainsOnly("aeiou");
        expect(stringAreVowels("bab")).to.be.false;
        expect(stringAreVowels("ao")).to.be.true;
        expect(stringAreVowels("ac")).to.be.false;

    });
});