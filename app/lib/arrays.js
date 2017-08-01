const checkLength = (length, error) => (array) => {
    if (array.length !== length) throw new Error(error);
    return array;
};

export { checkLength };