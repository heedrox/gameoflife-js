import {golParseDimensions, golParseDash} from './gol-parser'
import {golBuildDash} from './gol-builder'

export const golTurn = (input) => {

    const dimensions = golParseDimensions(input);

    const dash = golParseDash(dimensions)(input);

    dash[0][0]=".";
    
    return golBuildDash(dash);

};
