export const add = (a, b) => a + b;

export const addAsync = (a, b, callback) => setTimeout(() => callback(a + b), 1000);
