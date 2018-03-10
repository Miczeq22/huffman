import { expect } from "chai";
import countLettersInFile, { countLettersInString, readFilePromise, getUniqueLettersFromString } from '../util/file-reader';

describe ("File Reader", () => {
    
    it ("should return string from txt file", () => {
        return readFilePromise("testfile.txt").then(string => {
            expect(string).to.be.a("string");
        });
    });

    it ("should return array of unique letters in string", () => {
        return getUniqueLettersFromString("AAABBC").then(uniqueLetters => {
            expect(uniqueLetters).to.be.deep.equal(["A", "B", "C"]);
        });
    });

    it ("should return array of object with value and frequency of letter in string", () => {
        return countLettersInString("AAABBC", ["A", "B", "C"]).then(letters => {
            expect(letters).to.deep.equal([
                { value: "A", frequency: 3 },
                { value: "B", frequency: 2 },
                { value: "C", frequency: 1 },
            ]);
        });
    });

    it ("should return array of object with value and frequeny of letter from txt file", () => {
        return countLettersInFile("testfile.txt").then(letters => {
            expect(letters).to.be.deep.equal([
                { value: "A", frequency: 45 },
                { value: "D", frequency: 16 },
                { value: "B", frequency: 13 },
                { value: "C", frequency: 12 },
                { value: "E", frequency: 9 },
                { value: "F", frequency: 5 },
            ]);
        });
    });
});