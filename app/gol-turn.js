import {golParseDimensions, golParseDash} from './gol-parser'
import {golBuildDash} from './gol-builder'

export const golTurn = (input) => {

    const dimensions = golParseDimensions(input);

    const dash = golParseDash(dimensions)(input);
    const isAlive = (dash, row, col) => dash[row][col] === '*' ? 1 : 0;

    const countNeighbours = (dash, row, col) => isAlive(dash, row - 1, col - 1) + isAlive(dash, row - 1, col) + isAlive(dash, row - 1, col + 1) +
    isAlive(dash, row, col - 1) + isAlive(dash, row, col + 1) +
    isAlive(dash, row + 1, col - 1) + isAlive(dash, row + 1, col) + isAlive(dash, row + 1, col + 1);


    dash[0][0] = ".";
    if (dash.length > 1) {
        const numNeighbours = countNeighbours(dash, 1, 1);
        const cellAlive = isAlive(dash, 1, 1);
        console.log("nn", numNeighbours);
        if (cellAlive && (numNeighbours === 2 || numNeighbours === 3)) {
            dash[1][1] = '*';
        } else if (!cellAlive && (numNeighbours === 3)) {
            dash[1][1] = '*';
        } else {
            dash[1][1] = ".";
        }
    }

    return golBuildDash(dash);

};
