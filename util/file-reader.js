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

export const getUniqueLettersFromString = (string) => {
    return new Promise((resolve, reject) => {
        if (typeof string !== "string" || string.length === 0) {
            reject(Error("String can't be empty"));
        } else {
            const letters = [];

            for (let i = 0; i < string.length; i++) {
                if (string[i] !== string[i + 1] && string[i + 1] !== "\n") {
                    letters.push(string[i]);
                }
            }

            resolve(letters);
        }
    });
};

export const countLettersInString = (string, letters = []) => {};

const countLettersInFile = (path) => {};

export default countLettersInFile;