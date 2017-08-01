import {golTurn} from './gol-turn'
import {golFullParseDash} from './gol-parser'
import {golBuildDash} from './gol-builder'
import {pipe} from 'ramda'

const INVALID_INPUT_MSG = "Invalid input. Please, use something like this: \n3 2\n.*\n*.\n..";

describe("GOL - turn calculator", () => {
    describe("Validates input and throws error if wrong", () => {
        describe("Wrong formats", () => {
            const INVALID_INPUTS = [
                ["empty string", ""],
                ["bad header format", "2,3\n.."],
                ["bad header format when no numbers", "2 3x\n.."],
                ["bad header format when wrong dash length rows ", "2 1\n."],
                ["bad header format when wrong dash length cols ", "1 2\n."],
                ["bad header format when wrong dash length cols (2)", "3 2\n..\n..\n."],
                ["bad header format when wrong dash chars", "3 2\n.*\nk.\np."]
            ];
            INVALID_INPUTS.forEach(data => {
                it("should fail - " + data[0], () => {
                    expect(() => golTurn(data[1])).to.throw(INVALID_INPUT_MSG);
                });
            });

        });
        describe("Right formats", () => {
            const VALID_INPUT = [
                ["one by one", "1 1\n."],
                ["four by eight", "4 8\n...*..*.\n...*..*.\n...*..*.\n...*....\n"],
            ];
            VALID_INPUT.forEach(data => {
                it("should NOT fail - " + data[0], () => {
                    expect(() => golTurn(data[1])).not.to.throw(Error);
                });
            });
        });
    });

    describe("Calculates next turn in a 3x3 in the center", () => {
        const INPUT = [
            ["Any live cell with fewer than two live neighbours dies, as if caused by underpopulation. ", [[".", ".", "."], [".", "*", "."], [".", ".", "."]], "."],
            ["Any live cell with more than three live neighbours dies, as if by overcrowding.", [["*", "*", "*"], ["*", "*", "."], ["*", ".", "."]], "."],
            ["Any live cell with two live neighbours lives on to the next generation.",[[".", "*", "*"], [".", "*", "."], [".", ".", "."]], "*"],
            ["Any NOT DEAD cell with two live neighbours lives on to the next generation .",[[".", "*", "*"], [".", ".", "."], [".", ".", "."]], "."],
            ["Any live cell with three live neighbours lives on to the next generation.",[[".", "*", "*"], [".", "*", "."], [".", ".", "."]], "*"],
            ["Any dead cell with exactly three live neighbours becomes a live cell.",[[".", "*", "*"], [".", ".", "*"], [".", ".", "."]], "*"]

        ];
        INPUT.forEach((data) => {
            it(data[0], () => {
                const centerCell = (dash) => dash[1][1];

                const getCenterCellAfterTurn = pipe(
                    golBuildDash,
                    golTurn,
                    golFullParseDash,
                    centerCell
                );

                expect(getCenterCellAfterTurn(data[1])).to.equal(data[2]);
            });
        });
    });

    describe("Calculates next turn", () => {
        const INPUT = [
            ["1x1 dead, stays dead", golBuildDash([["."]]), golBuildDash([["."]])],
            ["1x1 alive, dies", golBuildDash([["*"]]), golBuildDash([["."]])],

        ];
        INPUT.forEach(data => {
            it(data[0], () => expect(golTurn(data[1])).to.equal(data[2]));
        });
    });
});
