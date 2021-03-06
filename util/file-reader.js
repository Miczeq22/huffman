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
                if (string[i] !== string[i + 1] && string[i] !== "\n") {
                    letters.push(string[i]);
                }
            }

            resolve(letters);
        }
    });
};

export const countLettersInString = (string, letters = []) => {
    return new Promise((resolve, reject) => {
        if (letters.length === 0) {
            reject(Error("Array of letters is empty."));
        } else if(typeof string !== "string" || string.length === 0) {
            reject(Error("String can't be empty."));
        } else {
            resolve(letters.map(letter => {
                return { value: letter, frequency: string.split(letter).length - 1 };
            }));
        }
    });
};

const countLettersInFile = (path) => {
    return readFilePromise(path)
    .then(getUniqueLettersFromString)
    .then(letters => readFilePromise(path).then(string => [string, letters]))
    .then(data => countLettersInString(data[0], data[1]));
};

export default countLettersInFile;