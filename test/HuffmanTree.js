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
        expect(new HuffmanTree(letters).encode("EA")).to.be.equal("11010"); 
    });

    it ("should encode character", () => {
        const tree = new HuffmanTree(letters);
        expect(new HuffmanTree(letters).encodeCharacter("E", tree.tree, "")).to.be.equal("1101");
    });

    it ("should decode binary string to string", () => {
        expect(new HuffmanTree(letters).decode("11010")).to.be.equal("EA");
    });

});
