import {golParseDimensions, golParseDash} from './gol-parser'

export const golTurn = (input) => {

    const dimensions = golParseDimensions(input);

    const dash = golParseDash(dimensions)(input);

    return input;
};
