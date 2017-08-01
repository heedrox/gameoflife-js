const throwError = (error) => { throw new Error(error); };

const throwIf = (error) => (expression) => {
    if (expression) {
        throwError(error);
    }
    return expression;
};


export { throwIf };