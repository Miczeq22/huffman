import fs from "fs";

export const readFilePromise = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (error, data) => {
            if (error) {
                reject(Error("File not found."));
            } else {
                resolve(data);
            }
        });
    });
};

export const getUniqueLettersFromString = (string) => {};

export const countLettersInString = (string, letters = []) => {};

const countLettersInFile = (path) => {};

export default countLettersInFile;