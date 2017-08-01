import { contains } from 'ramda';

const stringBefore = (char) => (string) => string.substr(0,string.indexOf(char));
const stringAfter = (char) => (string) => string.substr(string.indexOf(char)+1);

const stringContainsOnly = (chars) => (string) => {
    const isCharValid = (validChars) => (char) => contains(char,validChars);
    const areCharsValid = string.split("").map(isCharValid(chars));
    return !contains(false,areCharsValid);
};

export { stringBefore, stringAfter, stringContainsOnly};