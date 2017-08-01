import {split, tap, pipe, map, forEach, trim} from 'ramda';
import {checkLength} from './lib/arrays';
import {throwIf} from './lib/errors';
import {stringBefore, stringAfter, stringContainsOnly} from './lib/strings';

const INVALID_INPUT_MSG = "Invalid input. Please, use something like this: \n3 2\n.*\n*.\n..";
const throwInvalidMsgIf = throwIf(INVALID_INPUT_MSG);

const checkNumber = (number) => throwInvalidMsgIf(isNaN(number));

const getDimensions = pipe(
    stringBefore("\n"),
    split(" "),
    tap(map(checkNumber)),
    map(parseInt),
    tap(checkLength(2, INVALID_INPUT_MSG))
);

const checkDimensions = (dimensions) => (rows) => {
    checkLength(dimensions[0], INVALID_INPUT_MSG)(rows);
    rows.forEach(checkLength(dimensions[1], INVALID_INPUT_MSG));
};

const checkCharacters = (rows) => {
    const checkValidRow = (row) => {
        const validateRow = stringContainsOnly(".*");
        throwInvalidMsgIf(!validateRow(row));
    };

    rows.forEach(checkValidRow);
};

const getDash = (dimensions) => pipe(
    stringAfter("\n"),
    trim,
    split("\n"),
    tap(checkDimensions(dimensions)),
    tap(checkCharacters)
);

export { getDash, getDimensions};