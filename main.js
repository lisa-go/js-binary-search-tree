class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(this.array, 0, this.array.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);


        return root;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

let testArr = [1,2,3,4,5,6,7,8,9,10]
List1 = new Tree(testArr);
prettyPrint(List1.buildTree(testArr, 0, testArr.length - 1));