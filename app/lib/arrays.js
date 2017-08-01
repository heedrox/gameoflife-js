const checkLength = (length, error) => (array) => {
    if (array.length !== 2) throw new Error(INVALID_INPUT_MSG);
    return array;
};

export { checkLength };