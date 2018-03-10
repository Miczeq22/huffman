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
        let binaryString = "";

        string.split("").map(e =>  {
            binaryString = `${binaryString}${this.encodeCharacter(e, this.tree, "")}`;
        });

        return binaryString;
    }

    encodeCharacter(character, node, code) {
        if (node === null || node === undefined) {
            return null;
        }

        if (node.value === character) {
            return code;
        }

        const left = this.encodeCharacter(character, node.left, `${code}0`);
        if (left) {
            return left;
        }

        const right = this.encodeCharacter(character, node.right, `${code}1`);
        if (right) {
            return right;
        }

        return null;
    }

    decode(code) {

    }
}

export default HuffmanTree;