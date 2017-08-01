import {split, tap, pipe, map} from 'ramda';
import {checkLength} from './lib/arrays';
import {stringBefore} from './lib/strings';

const INVALID_INPUT_MSG = "Invalid input. Please, use something like this: \n3 2\n.*\n*.\n..";

const checkNumber = (number) => { if (isNaN(number)) { throw new Error(INVALID_INPUT_MSG); } };

const getDimensions = pipe(
    stringBefore("\n"),
    split(" "),
    tap(checkLength(2, INVALID_INPUT_MSG)),
    tap(map(checkNumber))
);

export const golTurn = (input) => {

    const dimensions = getDimensions(input);

    return input;
};
