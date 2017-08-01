import { golTurn } from './gol-turn'

const INVALID_INPUT_MSG = "Invalid input. Please, use something like this: \n3 2\n.*\n*.\n..";

describe("GOL - turn calculator", () => {
    describe("Validates input and throws error if wrong", () => {
        describe("Wrong formats", () => {
            const INVALID_INPUTS = [
                [ "empty string", "" ],
                [ "bad header format", "2,3\n.." ],
                [ "bad header format when no numbers", "2 3x\n.." ],
                [ "bad header format when wrong dash length rows ", "2 1\n." ],
                [ "bad header format when wrong dash length cols ", "1 2\n." ],
                [ "bad header format when wrong dash length cols (2)", "3 2\n..\n..\n." ],
                [ "bad header format when wrong dash chars", "3 2\n.*\nk.\np." ]
            ];
            INVALID_INPUTS.forEach(data => {
                it("should fail - "+data[0], () => {
                    expect(() => golTurn(data[1])).to.throw(INVALID_INPUT_MSG);
                });
            });

        });
        describe("Right formats", () => {
            const VALID_INPUT = [
                [ "one by one", "1 1\n." ],
                [ "four by eight", "4 8\n...*..*.\n...*..*.\n...*..*.\n...*....\n" ],
            ];
            VALID_INPUT.forEach(data => {
                it("should NOT fail - "+data[0], () => {
                    expect(() => golTurn(data[1])).not.to.throw(Error);
                });
            });
        });
    });

});
