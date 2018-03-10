import { expect } from 'chai';
import HuffmanTree from '../HuffmanTree';

describe("Huffman Tree", () => {
    let letters = [];

    beforeEach(() => {
        letters = [
            { value: "A", frequency: 45 },
            { value: "D", frequency: 16 },
            { value: "B", frequency: 13 },
            { value: "C", frequency: 12 },
            { value: "E", frequency: 9 },
            { value: "F", frequency: 5 },
        ];
    })

    it ("should return instance of HuffmanTree", () => {
        expect(new HuffmanTree([])).to.be.instanceOf(HuffmanTree);
    });

    it ("should build a tree while creating new instance", () => {
        expect(new HuffmanTree(letters).tree.left).to.be.deep.equal({
            frequency: 45, 
            value: "A"
        });
    });

    it ("should encode string", () => {
        expect(new HuffmanTree(letters).encode("AAA")).to.be.equal("000"); 
    });

    it ("should encode character", () => {
        expect(new HuffmanTree(letters).encodeCharacter("A")).to.be.equal("0");
    });

    it ("should decode binary string to string", () => {
        expect(new HuffmanTree(letters).decode("000")).to.be.equal("AAA");
    });

});
