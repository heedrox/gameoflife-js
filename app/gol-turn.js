import {getDimensions, getDash} from './gol-parser'

export const golTurn = (input) => {

    const dimensions = getDimensions(input);

    const dash = getDash(dimensions)(input);

    return input;
};
