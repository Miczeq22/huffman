class HuffmanTree {
    constructor(letters) {
        this.letters = this.sortLetters(letters);
        this.tree = this.buildTree();
    }

    buildTree() {
        let letters = this.letters;
        while (letters.length > 1) {
            const leftNode = letters.shift();
            const rightNode = letters.shift();

            const node = {
                left: leftNode,
                right: rightNode,
                value: null,
                frequency: leftNode.frequency + rightNode.frequency
            };

            letters.unshift(node);
            letters = this.sortLetters(this.letters);
        }

        return letters[0];
    }

    sortLetters(letters) {
        return letters.sort((a, b) => a.frequency > b.frequency);
    }
    
    encode(string) {

    }

    encodeCharacter(character, node, code) {

    }

    decode(code) {

    }
}

export default HuffmanTree;