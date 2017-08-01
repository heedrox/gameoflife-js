import { golTurn } from './gol-turn'

describe("GOL - turn calculator", () => {
    describe("Validates input and throws error if wrong", () => {
        describe("Wrong formats", () => {
            const INVALID_INPUTS = [
                [ "empty string", "" ],
                [ "bad header format", "2,3\n.." ],
                [ "bad header format when no numbers", "2 3x\n.." ],
            ];
            INVALID_INPUTS.forEach(data => {
                it("should fail - "+data[0], () => {
                    expect(() => golTurn(data[1])).to.throw(Error);
                });
            });

        });
        describe("Right formats", () => {
            const VALID_INPUT = [
                [ "one by one", "1 1\n." ]
            ];
            VALID_INPUT.forEach(data => {
                it("should NOT fail - "+data[0], () => {
                    expect(() => golTurn(data[1])).not.to.throw(Error);
                });
            });
        });
    });

});
